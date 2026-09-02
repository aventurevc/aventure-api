import { z } from "zod/v4";
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
export declare const CacheRevalidationPathSchema: z.ZodString;
export type CacheRevalidationPath = z.infer<typeof CacheRevalidationPathSchema>;
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
export declare const CacheRevalidationKindNameSchema: z.ZodString;
export type CacheRevalidationKindName = z.infer<typeof CacheRevalidationKindNameSchema>;
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
export declare const UnversionedCacheRevalidationSchema: z.ZodObject<{
    kind: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    paths: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodNever>;
    generation: z.ZodOptional<z.ZodNever>;
    idempotencyKey: z.ZodOptional<z.ZodNever>;
    broad: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>;
export type UnversionedCacheRevalidation = z.infer<typeof UnversionedCacheRevalidationSchema>;
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
export declare const VersionedCacheRevalidationSchema: z.ZodObject<{
    version: z.ZodLiteral<2>;
    generation: z.ZodString;
    idempotencyKey: z.ZodString;
    broad: z.ZodOptional<z.ZodBoolean>;
    kind: z.ZodString;
    path: z.ZodOptional<z.ZodString>;
    paths: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type VersionedCacheRevalidation = z.infer<typeof VersionedCacheRevalidationSchema>;
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
export declare const CacheRevalidationSchema: z.ZodUnion<readonly [z.ZodObject<{
    version: z.ZodLiteral<2>;
    generation: z.ZodString;
    idempotencyKey: z.ZodString;
    broad: z.ZodOptional<z.ZodBoolean>;
    kind: z.ZodString;
    path: z.ZodOptional<z.ZodString>;
    paths: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    paths: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodNever>;
    generation: z.ZodOptional<z.ZodNever>;
    idempotencyKey: z.ZodOptional<z.ZodNever>;
    broad: z.ZodOptional<z.ZodNever>;
}, z.core.$strip>]>;
export type CacheRevalidation = z.infer<typeof CacheRevalidationSchema>;
//# sourceMappingURL=revalidate-envelope.d.ts.map