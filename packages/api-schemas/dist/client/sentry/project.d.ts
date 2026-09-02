import { z } from "zod/v4";
/**
 * Request-side Sentry project slugs for dashboard endpoints.
 *
 * Mirrors the backend Sentry dashboard project allowlist used by
 * `GET /v1/sentry/issues` and `GET /v1/sentry/issues/counts`.
 *
 * @shared primitive:single reusable request-side Sentry project slug; not direct because Sentry dashboard callers reuse the same endpoint input across multiple client flows
 * @usedByEndpoint GET /v1/sentry/issues
 * @usedByEndpoint GET /v1/sentry/issues/counts
 * @contractShape client.sentry-project
 * @contractRole canonical
 * @ownerModule client/sentry/project.ts
 */
export declare const SentryProjectSchema: z.ZodEnum<{
    "aventure-tui": "aventure-tui";
    "back-end": "back-end";
    "data-engineering": "data-engineering";
    "front-end": "front-end";
}>;
export type SentryProject = z.infer<typeof SentryProjectSchema>;
export declare const SENTRY_PROJECTS: readonly ["back-end", "front-end", "data-engineering", "aventure-tui"];
//# sourceMappingURL=project.d.ts.map