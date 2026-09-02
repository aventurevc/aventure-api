import { z } from "zod/v4";
/**
 * Cache metrics
 *
 * @openapiSchema SystemCacheMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.cache-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/database/CacheMetrics.kt
 */
export declare const SystemCacheMetricsSchema: z.ZodObject<{
    blocksHit: z.ZodNumber;
    blocksRead: z.ZodNumber;
    hitRatioPercent: z.ZodNumber;
    isHealthy: z.ZodBoolean;
    status: z.ZodEnum<{
        critical: "critical";
        healthy: "healthy";
        warning: "warning";
    }>;
    tempBytesWritten: z.ZodNumber;
    tempFilesCreated: z.ZodNumber;
}, z.core.$strip>;
export type SystemCacheMetrics = z.infer<typeof SystemCacheMetricsSchema>;
//# sourceMappingURL=cache-metrics.d.ts.map