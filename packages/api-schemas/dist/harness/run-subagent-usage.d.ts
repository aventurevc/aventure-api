import { z } from "zod/v4";
declare const HarnessRunSubagentUsageSchemaDefinition: z.ZodObject<{
    ccAgentId: z.ZodString;
    turn: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    usage: z.ZodType<{
        billedModel?: {
            cacheCreationTokens: number;
            cacheMetricsComplete?: boolean | null | undefined;
            cacheReadTokens: number;
            costUsd: number;
            inputTokens: number;
            model: string;
            outputTokens: number;
            totalTokens: number;
        }[] | undefined;
        cacheCreationTokens: number;
        cacheMetricsComplete?: boolean | null | undefined;
        cacheReadTokens: number;
        costUsd: number;
        inputTokens: number;
        model: string;
        outputTokens: number;
        totalTokens: number;
        turn?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        billedModel?: {
            cacheCreationTokens: number;
            cacheMetricsComplete?: boolean | null | undefined;
            cacheReadTokens: number;
            costUsd: number;
            inputTokens: number;
            model: string;
            outputTokens: number;
            totalTokens: number;
        }[] | undefined;
        cacheCreationTokens: number;
        cacheMetricsComplete?: boolean | null | undefined;
        cacheReadTokens: number;
        costUsd: number;
        inputTokens: number;
        model: string;
        outputTokens: number;
        totalTokens: number;
        turn?: number | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type HarnessRunSubagentUsageDefinition = z.infer<typeof HarnessRunSubagentUsageSchemaDefinition>;
/**
 * One sub-agent's token total within a run
 *
 * @openapiSchema HarnessRunSubagentUsage
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunUsageSchema
 * @contractShape harness.run-subagent-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export declare const HarnessRunSubagentUsageSchema: z.ZodType<HarnessRunSubagentUsageDefinition>;
export type HarnessRunSubagentUsage = z.infer<typeof HarnessRunSubagentUsageSchema>;
export {};
//# sourceMappingURL=run-subagent-usage.d.ts.map