// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SystemTupleMetricsSchema = z.object({
    tuplesDeleted: z.number().int(),
    tuplesFetched: z.number().int(),
    tuplesInserted: z.number().int(),
    tuplesReturned: z.number().int(),
    tuplesUpdated: z.number().int(),
});
//# sourceMappingURL=tuple-metrics.js.map