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
export declare const SystemCheckpointMetricsSchema: z.ZodObject<{
    buffersAlloc: z.ZodNumber;
    buffersBackend: z.ZodNumber;
    buffersCheckpoint: z.ZodNumber;
    buffersClean: z.ZodNumber;
    checkpointsRequested: z.ZodNumber;
    checkpointsTimed: z.ZodNumber;
    checkpointSyncSecondsTotal: z.ZodNumber;
    checkpointWriteSecondsTotal: z.ZodNumber;
    maxWrittenClean: z.ZodNumber;
}, z.core.$strip>;
export type SystemCheckpointMetrics = z.infer<typeof SystemCheckpointMetricsSchema>;
//# sourceMappingURL=checkpoint-metrics.d.ts.map