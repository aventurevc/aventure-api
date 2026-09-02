import { z } from "zod/v4";
/**
 * Conflict metrics
 *
 * @openapiSchema SystemConflictMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemDatabaseMetricsSchema
 * @contractShape system.conflict-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/database/ConflictMetrics.kt
 */
export declare const SystemConflictMetricsSchema: z.ZodObject<{
    bufferPinConflicts: z.ZodNumber;
    lockConflicts: z.ZodNumber;
    snapshotConflicts: z.ZodNumber;
    tablespaceConflicts: z.ZodNumber;
}, z.core.$strip>;
export type SystemConflictMetrics = z.infer<typeof SystemConflictMetricsSchema>;
//# sourceMappingURL=conflict-metrics.d.ts.map