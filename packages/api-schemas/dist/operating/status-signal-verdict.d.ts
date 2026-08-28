import { z } from "zod/v4";
/**
 * Read-only operating-status signal verdict.
 *
 * @openapiSchema OperatingStatusSignalVerdict
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @contractShape operating.status-signal-verdict
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatusSignal.kt
 */
export declare const OperatingStatusSignalVerdictSchema: z.ZodEnum<{
    ACQUISITION_SUSPECTED: "ACQUISITION_SUSPECTED";
    DEAD_TARGET: "DEAD_TARGET";
    EDGE_CHALLENGED: "EDGE_CHALLENGED";
    INDETERMINATE: "INDETERMINATE";
    LIVE: "LIVE";
    NO_WEBSITE: "NO_WEBSITE";
    PARKED: "PARKED";
}>;
export type OperatingStatusSignalVerdict = z.infer<typeof OperatingStatusSignalVerdictSchema>;
//# sourceMappingURL=status-signal-verdict.d.ts.map