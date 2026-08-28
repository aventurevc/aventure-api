// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const OperatingStatusSignalVerdictSchema = z.enum([
    "LIVE",
    "EDGE_CHALLENGED",
    "DEAD_TARGET",
    "PARKED",
    "ACQUISITION_SUSPECTED",
    "INDETERMINATE",
    "NO_WEBSITE",
]);
//# sourceMappingURL=status-signal-verdict.js.map