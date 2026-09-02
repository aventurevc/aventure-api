import { z } from "zod/v4";
/**
 * System metrics
 *
 * @openapiSchema SystemMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/system/SystemMetrics.kt
 */
export declare const SystemMetricsSchema: z.ZodObject<{
    isHealthy: z.ZodBoolean;
    load1: z.ZodNumber;
    load15: z.ZodNumber;
    load5: z.ZodNumber;
    postgresRestarts: z.ZodNumber;
    status: z.ZodEnum<{
        critical: "critical";
        healthy: "healthy";
        warning: "warning";
    }>;
    walSizeMb: z.ZodNumber;
}, z.core.$strip>;
export type SystemMetrics = z.infer<typeof SystemMetricsSchema>;
//# sourceMappingURL=metrics.d.ts.map