import { z } from "zod/v4";
declare const HarnessRunPromptEstimateSchemaDefinition: z.ZodObject<{
    estimatedTokens: z.ZodInt;
    name: z.ZodString;
}, z.core.$strip>;
type HarnessRunPromptEstimateDefinition = z.infer<typeof HarnessRunPromptEstimateSchemaDefinition>;
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
export declare const HarnessRunPromptEstimateSchema: z.ZodType<HarnessRunPromptEstimateDefinition>;
export type HarnessRunPromptEstimate = z.infer<typeof HarnessRunPromptEstimateSchema>;
export {};
//# sourceMappingURL=run-prompt-estimate.d.ts.map