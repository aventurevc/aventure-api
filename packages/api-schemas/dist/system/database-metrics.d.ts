import { z } from "zod/v4";
/**
 * Database metrics
 *
 * @openapiSchema SystemDatabaseMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.database-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/database/DatabaseMetrics.kt
 */
export declare const SystemDatabaseMetricsSchema: z.ZodObject<{
    conflictDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        bufferPinConflicts: z.ZodNumber;
        lockConflicts: z.ZodNumber;
        snapshotConflicts: z.ZodNumber;
        tablespaceConflicts: z.ZodNumber;
    }, z.core.$strip>>>;
    conflicts: z.ZodNumber;
    deadlocks: z.ZodNumber;
    sizeBytes: z.ZodNumber;
    sizeFormatted: z.ZodString;
    transactionsCommitted: z.ZodNumber;
    transactionsRolledBack: z.ZodNumber;
}, z.core.$strip>;
export type SystemDatabaseMetrics = z.infer<typeof SystemDatabaseMetricsSchema>;
//# sourceMappingURL=database-metrics.d.ts.map