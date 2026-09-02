import { z } from "zod/v4";
declare const HarnessRunUsageModelSchemaDefinition: z.ZodObject<{
    cacheCreationTokens: z.ZodInt;
    cacheMetricsComplete: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    cacheReadTokens: z.ZodInt;
    costUsd: z.ZodNumber;
    inputTokens: z.ZodInt;
    model: z.ZodString;
    outputTokens: z.ZodInt;
    totalTokens: z.ZodInt;
}, z.core.$strip>;
type HarnessRunUsageModelDefinition = z.infer<typeof HarnessRunUsageModelSchemaDefinition>;
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
export declare const HarnessRunUsageModelSchema: z.ZodType<HarnessRunUsageModelDefinition>;
export type HarnessRunUsageModel = z.infer<typeof HarnessRunUsageModelSchema>;
export {};
//# sourceMappingURL=run-usage-model.d.ts.map