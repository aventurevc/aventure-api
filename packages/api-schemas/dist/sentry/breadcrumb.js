// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SentryBreadcrumbSchemaDefinition = z.object({
    category: z.string().nullish(),
    data: z.record(z.string(), z.string()),
    level: z.string().nullish(),
    message: z.string().nullish(),
    timestamp: z.number().nullish(),
    type: z.string().nullish(),
});
/**
 * Sentry breadcrumb event
 *
 * @openapiSchema SentryBreadcrumb
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventDetailSchema
 * @contractShape sentry.breadcrumb
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryBreadcrumb.kt
 */
export const SentryBreadcrumbSchema = SentryBreadcrumbSchemaDefinition;
//# sourceMappingURL=breadcrumb.js.map