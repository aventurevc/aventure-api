// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunUsageModelSchemaDefinition = z.object({
    /** Prompt tokens written to cache for the target model */
    cacheCreationTokens: z.int(),
    /** Provider-declared completeness of cache-read classification: true when every gateway cache-bearing row was classifiable for cache-read share, false when any was incomplete or unclassifiable, and null for unknown, legacy, or non-gateway ledger data. This does not attest to cache-creation token completeness. */
    cacheMetricsComplete: z.boolean().nullish(),
    /** Prompt tokens served from cache for the target model */
    cacheReadTokens: z.int(),
    /** Target-model cost in USD */
    costUsd: z.number(),
    /** Prompt (input) tokens billed for the target model */
    inputTokens: z.int(),
    /** Gateway-reported provider/target model id */
    model: z.string(),
    /** Completion (output) tokens for the target model */
    outputTokens: z.int(),
    /** Input plus output plus cache tokens for the target model */
    totalTokens: z.int(),
});
/**
 * One target-model row inside a role total
 *
 * @openapiSchema HarnessRunUsageModel
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunRoleUsageSchema
 * @contractShape harness.run-usage-model
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunUsageModelSchema = HarnessRunUsageModelSchemaDefinition;
//# sourceMappingURL=run-usage-model.js.map