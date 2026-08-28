// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RefreshTriggerOutcomeSchemaDefinition = z.object({
    /** Number of source ids accepted into the refresh lane */
    enqueued: z.int(),
    /** Refresh kind: fresh, stale-similarity, stale-embedding, owner-reconcile */
    kind: z.string(),
});
/**
 * Outcome of an operator refresh trigger
 *
 * @openapiSchema RefreshTriggerOutcome
 * @endpoint POST /v1/content/embedding/refresh
 * @endpoint POST /v1/content/embedding/refresh/reconcile
 * @endpoint POST /v1/content/embedding/refresh/sweep
 * @contractShape refresh.trigger-outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/RefreshTriggerOutcome.kt
 */
export const RefreshTriggerOutcomeSchema = RefreshTriggerOutcomeSchemaDefinition;
//# sourceMappingURL=trigger-outcome.js.map