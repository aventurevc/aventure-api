// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SentryTagSchemaDefinition = z.object({
    tagKey: z.string(),
    tagValue: z.string(),
});
/**
 * Sentry tag key/value pair
 *
 * @openapiSchema SentryTag
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventDetailSchema
 * @contractShape sentry.tag
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryTag.kt
 */
export const SentryTagSchema = SentryTagSchemaDefinition;
//# sourceMappingURL=tag.js.map