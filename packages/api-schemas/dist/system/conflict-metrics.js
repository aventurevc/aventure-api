// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SystemConflictMetricsSchema = z.object({
    bufferPinConflicts: z.number().int(),
    lockConflicts: z.number().int(),
    snapshotConflicts: z.number().int(),
    tablespaceConflicts: z.number().int(),
});
//# sourceMappingURL=conflict-metrics.js.map