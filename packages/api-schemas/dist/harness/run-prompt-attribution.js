// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunPromptEstimateSchema } from "./run-prompt-estimate.js";
/**
 * Added-prompt token estimates and historical first-turn input attribution
 *
 * @openapiSchema HarnessRunPromptAttribution
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunUsageSchema
 * @contractShape harness.run-prompt-attribution
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunPromptAttributionSchema = z.object({
    /** Tokenizer ESTIMATE per added prompt document (skills, agents, directives) */
    addedPrompt: z.array(HarnessRunPromptEstimateSchema).optional(),
    /** Legacy first-orchestrator-turn input plus cache token proxy. It did not isolate the system prefix, is retained only when reading historical snapshots, and is null for newly measured runs. */
    systemPrefixMeasuredTokens: z.int().nullish(),
});
//# sourceMappingURL=run-prompt-attribution.js.map