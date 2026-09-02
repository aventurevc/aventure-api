import { z } from "zod/v4";
/** Shared path text (trim, byte cap, forbidden characters) before route-prefix refine. */
const cacheRevalidationPathTextSchema = z
    .string()
    .trim()
    .min(1)
    .refine((path) => new TextEncoder().encode(path).byteLength <= 512, {
    message: "path must fit in 512 bytes",
})
    .refine((path) => !["\\", "\0", "?", "#", "[", "]", "(", ")"].some((character) => path.includes(character)), { message: "path contains a forbidden character" });
const currentCacheRevalidationRoutePattern = /^\/(?:api\/(?:entities|sitemap)|blog|companies|government|investors|news|non-profits|people|sitemap(?:-xml)?)(?:\/|$)/;
const isCurrentCacheRevalidationPath = (path) => path === "/" || path === "/sitemap.xml" || currentCacheRevalidationRoutePattern.test(path);
/**
 * Single requested cache-revalidation path.
 *
 * Canonical element validation consumed directly by the front-end receiver: trimmed non-empty text
 * within 512 bytes, with no backslash, NUL, `?`, `#`, `[`, `]`, `(`, or `)` characters, and either
 * `/`, `/sitemap.xml`, or a current route prefix. The byte cap is a refine because Zod length checks
 * count characters, not UTF-8 bytes.
 *
 * @shared primitive:multi reusable cross-repo cache-revalidation contract; not direct because the receiver is a Next.js route outside the Spring OpenAPI surface
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.cache-revalidation-path
 * @contractRole canonical
 * @ownerModule client/cache/revalidate-envelope.ts
 */
export const CacheRevalidationPathSchema = cacheRevalidationPathTextSchema.refine(isCurrentCacheRevalidationPath, { message: "path is not a revalidatable front-end route" });
/** V2-only compatibility for durable events captured before Business Lines moved under Companies. */
const VersionedCacheRevalidationPathSchema = cacheRevalidationPathTextSchema.refine((path) => isCurrentCacheRevalidationPath(path) || /^\/business-lines(?:\/|$)/.test(path), { message: "path is not a revalidatable front-end route" });
/**
 * Cache invalidation kind name as accepted on the wire.
 *
 * The receiver trims and byte-caps the text (`text(body.kind)`, 64 bytes) but
 * deliberately does NOT enum-validate it: `cacheRevalidationProtocol.ts` maps unknown
 * kinds to `undefined` and flags the request `compatibilityBroad`, falling back to the
 * full sweep instead of rejecting. An enum here would reject envelopes the front-end
 * accepts, so this stays a bounded string; the known-kind catalog lives in
 * `front-end/src/services/cache/backendDataRevalidation.ts` (`cacheInvalidationKinds`).
 *
 * @shared primitive:multi reusable cross-repo cache-revalidation contract; not direct because the receiver is a Next.js route outside the Spring OpenAPI surface
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.cache-revalidation-kind-name
 * @contractRole canonical
 * @ownerModule client/cache/revalidate-envelope.ts
 */
export const CacheRevalidationKindNameSchema = z
    .string()
    .trim()
    .min(1)
    .refine((kind) => new TextEncoder().encode(kind).byteLength <= 64, {
    message: "kind must fit in 64 bytes",
});
/**
 * Unversioned cache-revalidation envelope, valid through the rollback window.
 *
 * The receiver treats a body without `version` as unversioned
 * (`if (body.version === undefined)`) and rejects unversioned bodies carrying any v2-only
 * field (`generation`, `idempotencyKey`, `broad` → `missing_version`), so those keys are
 * declared `z.never().optional()`: a present value fails this arm instead of being
 * stripped. Unknown keys are ignored by the receiver (it reads only the known fields off
 * the JSON record), so the default `z.object` strip behavior matches the wire —
 * `z.strictObject` would reject envelopes the front-end accepts. The path-limits check
 * duplicates the v2 arm's because the receiver computes `paths(body)` before the version
 * branch, so both arms share the same 64-entry / 8192-byte bounds; the receiver's `Set`
 * dedup is normalization, not validation, and is intentionally not reproduced here.
 *
 * @shared primitive:multi reusable cross-repo cache-revalidation contract; not direct because the receiver is a Next.js route outside the Spring OpenAPI surface
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.cache-revalidation-unversioned
 * @contractRole canonical
 * @ownerModule client/cache/revalidate-envelope.ts
 */
export const UnversionedCacheRevalidationSchema = z
    .object({
    kind: CacheRevalidationKindNameSchema.optional(),
    path: CacheRevalidationPathSchema.optional(),
    paths: z.array(CacheRevalidationPathSchema).optional(),
    version: z.never().optional(),
    generation: z.never().optional(),
    idempotencyKey: z.never().optional(),
    broad: z.never().optional(),
})
    .check(({ value, issues }) => {
    const requestedPaths = value.path === undefined ? (value.paths ?? []) : [value.path, ...(value.paths ?? [])];
    if (requestedPaths.length > 64) {
        issues.push({
            code: "too_big",
            origin: "array",
            maximum: 64,
            inclusive: true,
            path: ["paths"],
            input: requestedPaths,
            message: "at most 64 revalidation paths are accepted",
        });
    }
    let aggregateBytes = 0;
    for (const requestedPath of requestedPaths) {
        aggregateBytes += new TextEncoder().encode(requestedPath).byteLength;
    }
    if (aggregateBytes > 8192) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["paths"],
            input: value.paths,
            message: "revalidation paths must fit in 8192 bytes in aggregate",
        });
    }
});
/**
 * Versioned (v2) cache-revalidation protocol envelope.
 *
 * Required by the receiver when `version` is present: the numeric literal `2`
 * (`body.version !== CACHE_REVALIDATION_VERSION`), a non-empty `kind`
 * (`kindName === undefined` → `invalid_versioned_request`), a decimal-string `generation`
 * (`/^(?:0|[1-9]\d*)$/` within 32 bytes), and an `idempotencyKey` of exactly
 * `<scope>:<generation>` where scope matches `/^[a-z0-9][a-z0-9._-]{0,63}$/i` and the
 * suffix equals the generation (`invalid_idempotency_key`). `broad` is an optional
 * boolean; when true the receiver ignores kind/paths for the revalidation flow but still
 * validates them. The singular `path` is accepted here too because the receiver computes
 * `paths(body)` before the version branch. The 32/96 character caps equal the receiver's
 * byte caps because the surviving values are ASCII by construction (digit generation;
 * ASCII scope + `:` + digit suffix key).
 *
 * @shared primitive:multi reusable cross-repo cache-revalidation contract; not direct because the receiver is a Next.js route outside the Spring OpenAPI surface
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.cache-revalidation-v2
 * @contractRole canonical
 * @ownerModule client/cache/revalidate-envelope.ts
 */
export const VersionedCacheRevalidationSchema = z
    .object({
    version: z.literal(2),
    generation: z
        .string()
        .trim()
        .min(1)
        .max(32)
        .regex(/^(?:0|[1-9]\d*)$/),
    idempotencyKey: z.string().trim().min(1).max(96),
    broad: z.boolean().optional(),
    kind: CacheRevalidationKindNameSchema,
    path: VersionedCacheRevalidationPathSchema.optional(),
    paths: z.array(VersionedCacheRevalidationPathSchema).optional(),
})
    .check(({ value, issues }) => {
    const [scope = "", keyGeneration, extraKeyPart] = value.idempotencyKey.split(":");
    if (extraKeyPart !== undefined ||
        !/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(scope) ||
        keyGeneration !== value.generation) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["idempotencyKey"],
            input: value.idempotencyKey,
            message: "idempotencyKey must be <scope>:<generation> matching the generation field",
        });
    }
})
    .check(({ value, issues }) => {
    const requestedPaths = value.path === undefined ? (value.paths ?? []) : [value.path, ...(value.paths ?? [])];
    if (requestedPaths.length > 64) {
        issues.push({
            code: "too_big",
            origin: "array",
            maximum: 64,
            inclusive: true,
            path: ["paths"],
            input: requestedPaths,
            message: "at most 64 revalidation paths are accepted",
        });
    }
    let aggregateBytes = 0;
    for (const requestedPath of requestedPaths) {
        aggregateBytes += new TextEncoder().encode(requestedPath).byteLength;
    }
    if (aggregateBytes > 8192) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["paths"],
            input: value.paths,
            message: "revalidation paths must fit in 8192 bytes in aggregate",
        });
    }
});
/**
 * Cache-revalidation request envelope: the v2 protocol envelope or the unversioned envelope
 * (valid through the rollback window). The arms are disjoint —
 * unversioned rejects any present `version`/v2-only field, v2 requires `version: 2` — so
 * union order carries no semantic meaning. An empty JSON object `{}` is a valid unversioned
 * envelope (the receiver's broad full-sweep fallback); a wholly empty body is an
 * HTTP-layer concern the receiver handles before JSON parsing and is not modeled here.
 *
 * @shared composition:unions the versioned and unversioned cache-revalidation arms; not direct because the receiver is a Next.js route outside the Spring OpenAPI surface
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.cache-revalidation
 * @contractRole canonical
 * @ownerModule client/cache/revalidate-envelope.ts
 */
export const CacheRevalidationSchema = z.union([
    VersionedCacheRevalidationSchema,
    UnversionedCacheRevalidationSchema,
]);
//# sourceMappingURL=revalidate-envelope.js.map