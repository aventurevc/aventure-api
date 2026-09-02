import { z } from "zod/v4";
/**
 * Query stats
 *
 * @openapiSchema SystemQueryStats
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.query-stats
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/query/QueryStats.kt
 */
export declare const SystemQueryStatsSchema: z.ZodObject<{
    averageQueryFormatted: z.ZodString;
    isHealthy: z.ZodBoolean;
    longestTransactionFormatted: z.ZodString;
    longestTransactionSeconds: z.ZodNumber;
    status: z.ZodEnum<{
        critical: "critical";
        healthy: "healthy";
        warning: "warning";
    }>;
    totalQueries: z.ZodNumber;
    totalTimeSeconds: z.ZodNumber;
}, z.core.$strip>;
export type SystemQueryStats = z.infer<typeof SystemQueryStatsSchema>;
//# sourceMappingURL=query-stats.d.ts.map