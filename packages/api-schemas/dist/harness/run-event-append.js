// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunEventAppendSchemaDefinition = z.object({
    /** Run-stream envelope as an opaque JSON string */
    payload: z.string(),
    /** Stream part type */
    type: z.string(),
});
/**
 * Append one run stream event
 *
 * @openapiSchema HarnessRunEventAppend
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events/batch
 * @usedBySchema HarnessRunEventBatchAppendSchema
 * @contractShape harness.run-event-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunEvent.kt
 */
export const HarnessRunEventAppendSchema = HarnessRunEventAppendSchemaDefinition;
//# sourceMappingURL=run-event-append.js.map