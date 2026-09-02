// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunEventAppendSchema } from "./run-event-append.js";
const HarnessRunEventBatchAppendSchemaDefinition = z.object({
    /** Ordered events to append; insertion order assigns sequence */
    event: z.array(HarnessRunEventAppendSchema),
});
/**
 * Append a buffered batch of run events
 *
 * @openapiSchema HarnessRunEventBatchAppend
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/events/batch
 * @contractShape harness.run-event-batch-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunEvent.kt
 */
export const HarnessRunEventBatchAppendSchema = HarnessRunEventBatchAppendSchemaDefinition;
//# sourceMappingURL=run-event-batch-append.js.map