// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Checkpoint metrics
 *
 * @openapiSchema SystemCheckpointMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.checkpoint-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/checkpoint/CheckpointMetrics.kt
 */
export const SystemCheckpointMetricsSchema = z.object({
    buffersAlloc: z.number().int(),
    buffersBackend: z.number().int(),
    buffersCheckpoint: z.number().int(),
    buffersClean: z.number().int(),
    checkpointsRequested: z.number().int(),
    checkpointsTimed: z.number().int(),
    checkpointSyncSecondsTotal: z.number(),
    checkpointWriteSecondsTotal: z.number(),
    maxWrittenClean: z.number().int(),
});
//# sourceMappingURL=checkpoint-metrics.js.map