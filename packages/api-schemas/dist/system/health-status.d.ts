import { z } from "zod/v4";
/**
 * Canonical health severity for Supabase telemetry metrics.
 *
 * @openapiSchema SystemHealthStatus
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemCacheMetricsSchema
 * @usedBySchema SystemMetricsSchema
 * @usedBySchema SystemPoolMetricsSchema
 * @usedBySchema SystemQueryStatsSchema
 * @contractShape system.health-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/telemetry/SystemHealthStatus.kt
 */
export declare const SystemHealthStatusSchema: z.ZodEnum<{
    critical: "critical";
    healthy: "healthy";
    warning: "warning";
}>;
export type SystemHealthStatus = z.infer<typeof SystemHealthStatusSchema>;
//# sourceMappingURL=health-status.d.ts.map