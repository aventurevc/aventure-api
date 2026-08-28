import { z } from "zod/v4";
/**
 * Confidence the answer is fully supported by the cited corpus. LOW signals an abstention.
 *
 * @openapiSchema HelpConfidence
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentHelp.kt
 */
export declare const HelpConfidenceSchema: z.ZodEnum<{
    HIGH: "HIGH";
    LOW: "LOW";
    MEDIUM: "MEDIUM";
}>;
export type HelpConfidence = z.infer<typeof HelpConfidenceSchema>;
//# sourceMappingURL=confidence.d.ts.map