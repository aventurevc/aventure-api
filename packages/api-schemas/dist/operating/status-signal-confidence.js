// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const OperatingStatusSignalConfidenceSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
//# sourceMappingURL=status-signal-confidence.js.map