import { z } from "zod/v4";
declare const HarnessRunRoleUsageSchemaDefinition: z.ZodObject<{
    billedModel: z.ZodOptional<z.ZodArray<z.ZodType<{
        cacheCreationTokens: number;
        cacheMetricsComplete?: boolean | null | undefined;
        cacheReadTokens: number;
        costUsd: number;
        inputTokens: number;
        model: string;
        outputTokens: number;
        totalTokens: number;
    }, unknown, z.core.$ZodTypeInternals<{
        cacheCreationTokens: number;
        cacheMetricsComplete?: boolean | null | undefined;
        cacheReadTokens: number;
        costUsd: number;
        inputTokens: number;
        model: string;
        outputTokens: number;
        totalTokens: number;
    }, unknown>>>>;
    cacheCreationTokens: z.ZodInt;
    cacheMetricsComplete: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    cacheReadTokens: z.ZodInt;
    costUsd: z.ZodNumber;
    inputTokens: z.ZodInt;
    model: z.ZodString;
    outputTokens: z.ZodInt;
    totalTokens: z.ZodInt;
    turn: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type HarnessRunRoleUsageDefinition = z.infer<typeof HarnessRunRoleUsageSchemaDefinition>;
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
export declare const HarnessRunRoleUsageSchema: z.ZodType<HarnessRunRoleUsageDefinition>;
export type HarnessRunRoleUsage = z.infer<typeof HarnessRunRoleUsageSchema>;
export {};
//# sourceMappingURL=run-role-usage.d.ts.map