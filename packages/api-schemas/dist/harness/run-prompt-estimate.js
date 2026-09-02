// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunPromptEstimateSchemaDefinition = z.object({
    /** Estimated tokens (chars/4 heuristic, not billed truth) */
    estimatedTokens: z.int(),
    /** Document name (skill name, agent:<name>, runtime-directives) */
    name: z.string(),
});
/**
 * One added prompt document's estimated token size
 *
 * @openapiSchema HarnessRunPromptEstimate
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunPromptAttributionSchema
 * @contractShape harness.run-prompt-estimate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunPromptEstimateSchema = HarnessRunPromptEstimateSchemaDefinition;
//# sourceMappingURL=run-prompt-estimate.js.map