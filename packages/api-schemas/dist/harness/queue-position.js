// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessQueuePositionSchemaDefinition = z.object({
    /** Claimable queued runs of this run's model */
    modelQueued: z.int(),
    /** Running runs of this run's model */
    modelRunning: z.int(),
    /** 1-based place among claimable queued runs of the same model; null when not claimable */
    placeInLine: z.int().nullish(),
    /** Total claimable queued runs across all models */
    totalInQueue: z.int(),
});
/**
 * A run's claimable queue position and depth
 *
 * @openapiSchema HarnessQueuePosition
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/queue-position
 * @endpoint GET /v1/harness/runs/{runId}/queue-position
 * @contractShape harness.queue-position
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessQueuePosition.kt
 */
export const HarnessQueuePositionSchema = HarnessQueuePositionSchemaDefinition;
//# sourceMappingURL=queue-position.js.map