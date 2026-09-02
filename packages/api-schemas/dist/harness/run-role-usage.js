// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunUsageModelSchema } from "./run-usage-model.js";
const HarnessRunRoleUsageSchemaDefinition = z.object({
    /** Gateway-reported per-target-model breakdown; empty for Langfuse-only */
    billedModel: z.array(HarnessRunUsageModelSchema).optional(),
    /** Prompt tokens written to cache (the write premium) */
    cacheCreationTokens: z.int(),
    /** Provider-declared completeness of cache-read classification: true when every gateway cache-bearing row was classifiable for cache-read share, false when any was incomplete or unclassifiable, and null for unknown, legacy, or non-gateway ledger data. This does not attest to cache-creation token completeness. */
    cacheMetricsComplete: z.boolean().nullish(),
    /** Prompt tokens served from cache (cheap reads) */
    cacheReadTokens: z.int(),
    /** Role cost in USD */
    costUsd: z.number(),
    /** Prompt (input) tokens billed for the role */
    inputTokens: z.int(),
    /** Role's configured model id, echoed to label the total */
    model: z.string(),
    /** Completion (output) tokens generated for the role */
    outputTokens: z.int(),
    /** Input plus output plus cache tokens for the role */
    totalTokens: z.int(),
    /** Assistant turns this role consumed; null until the harness reports turns */
    turn: z.int().nullish(),
});
/**
 * One role's token and cost total for a run
 *
 * @openapiSchema HarnessRunRoleUsage
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunSubagentUsageSchema
 * @usedBySchema HarnessRunUsageSchema
 * @contractShape harness.run-role-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunRoleUsageSchema = HarnessRunRoleUsageSchemaDefinition;
//# sourceMappingURL=run-role-usage.js.map