// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SentryEventDetailSchema } from "./event-detail.js";
const SentryEventSchemaDefinition = z.object({
    /** Error message if unavailable */
    error: z.string().nullish(),
    /** Detailed event information */
    event: SentryEventDetailSchema.nullish(),
});
/**
 * Sentry event response
 *
 * @openapiSchema SentryEvent
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @contractShape sentry.event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryEvent.kt
 */
export const SentryEventSchema = SentryEventSchemaDefinition;
//# sourceMappingURL=event.js.map