import { z } from "zod/v4";
/**
 * Confidence assigned to an operating-status signal.
 *
 * @openapiSchema OperatingStatusSignalConfidence
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @contractShape operating.status-signal-confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatusSignal.kt
 */
export declare const OperatingStatusSignalConfidenceSchema: z.ZodEnum<{
    HIGH: "HIGH";
    LOW: "LOW";
    MEDIUM: "MEDIUM";
}>;
export type OperatingStatusSignalConfidence = z.infer<typeof OperatingStatusSignalConfidenceSchema>;
//# sourceMappingURL=status-signal-confidence.d.ts.map