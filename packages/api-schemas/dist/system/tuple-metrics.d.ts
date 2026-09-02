import { z } from "zod/v4";
/**
 * Tuple metrics
 *
 * @openapiSchema SystemTupleMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.tuple-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/database/TupleMetrics.kt
 */
export declare const SystemTupleMetricsSchema: z.ZodObject<{
    tuplesDeleted: z.ZodNumber;
    tuplesFetched: z.ZodNumber;
    tuplesInserted: z.ZodNumber;
    tuplesReturned: z.ZodNumber;
    tuplesUpdated: z.ZodNumber;
}, z.core.$strip>;
export type SystemTupleMetrics = z.infer<typeof SystemTupleMetricsSchema>;
//# sourceMappingURL=tuple-metrics.d.ts.map