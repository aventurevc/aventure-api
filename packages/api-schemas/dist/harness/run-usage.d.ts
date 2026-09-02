import { z } from "zod/v4";
declare const HarnessRunUsageSchemaDefinition: z.ZodObject<{
    agent: z.ZodType<{
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
    instruction: z.ZodOptional<z.ZodArray<z.ZodType<{
        kind: "AGENT" | "PROMPT" | "SKILL";
        name: string;
        version: string;
    }, unknown, z.core.$ZodTypeInternals<{
        kind: "AGENT" | "PROMPT" | "SKILL";
        name: string;
        version: string;
    }, unknown>>>>;
    langfuseSessionUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    langfuseTraceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptAttribution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        addedPrompt: z.ZodOptional<z.ZodArray<z.ZodType<{
            estimatedTokens: number;
            name: string;
        }, unknown, z.core.$ZodTypeInternals<{
            estimatedTokens: number;
            name: string;
        }, unknown>>>>;
        systemPrefixMeasuredTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    }, z.core.$strip>>>;
    subagent: z.ZodType<{
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
    subagentUsage: z.ZodOptional<z.ZodArray<z.ZodType<{
        ccAgentId: string;
        turn?: number | null | undefined;
        usage: {
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
        };
    }, unknown, z.core.$ZodTypeInternals<{
        ccAgentId: string;
        turn?: number | null | undefined;
        usage: {
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
        };
    }, unknown>>>>;
}, z.core.$strip>;
type HarnessRunUsageDefinition = z.infer<typeof HarnessRunUsageSchemaDefinition>;
/**
 * A harness run's token and cost usage split by role
 *
 * @openapiSchema HarnessRunUsage
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @contractShape harness.run-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export declare const HarnessRunUsageSchema: z.ZodType<HarnessRunUsageDefinition>;
export type HarnessRunUsage = z.infer<typeof HarnessRunUsageSchema>;
export {};
//# sourceMappingURL=run-usage.d.ts.map