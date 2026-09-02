import { z } from "zod/v4";
/**
 * Replication metrics from the Supabase metrics API.
 *
 * @openapiSchema SystemReplicationMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.replication-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/replication/ReplicationMetrics.kt
 */
export declare const SystemReplicationMetricsSchema: z.ZodObject<{
    connectedToPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isAvailable: z.ZodBoolean;
    lagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    physicalLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    replayLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    replicationSlotsMaxLagBytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sendLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodString;
    walReplayPaused: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type SystemReplicationMetrics = z.infer<typeof SystemReplicationMetricsSchema>;
//# sourceMappingURL=replication-metrics.d.ts.map