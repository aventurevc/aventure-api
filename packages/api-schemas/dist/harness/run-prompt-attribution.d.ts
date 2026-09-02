import { z } from "zod/v4";
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
export declare const HarnessRunPromptAttributionSchema: z.ZodObject<{
    addedPrompt: z.ZodOptional<z.ZodArray<z.ZodType<{
        estimatedTokens: number;
        name: string;
    }, unknown, z.core.$ZodTypeInternals<{
        estimatedTokens: number;
        name: string;
    }, unknown>>>>;
    systemPrefixMeasuredTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
export type HarnessRunPromptAttribution = z.infer<typeof HarnessRunPromptAttributionSchema>;
//# sourceMappingURL=run-prompt-attribution.d.ts.map