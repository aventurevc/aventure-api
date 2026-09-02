import { z } from "zod/v4";
const sentryProjectValues = [
    "back-end",
    "front-end",
    "data-engineering",
    "aventure-tui",
];
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
export const SentryProjectSchema = z.enum(sentryProjectValues);
export const SENTRY_PROJECTS = sentryProjectValues;
//# sourceMappingURL=project.js.map