import { z } from "zod/v4";
/**
 * Connection metrics
 *
 * @openapiSchema SystemConnectionMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.connection-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/connection/ConnectionMetrics.kt
 */
export declare const SystemConnectionMetricsSchema: z.ZodObject<{
    active: z.ZodInt;
    idle: z.ZodInt;
    idleInTransaction: z.ZodInt;
    total: z.ZodInt;
    waiting: z.ZodInt;
}, z.core.$strip>;
export type SystemConnectionMetrics = z.infer<typeof SystemConnectionMetricsSchema>;
//# sourceMappingURL=connection-metrics.d.ts.map