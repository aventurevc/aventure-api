// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemConflictMetricsSchema } from "./conflict-metrics.js";
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
export const SystemDatabaseMetricsSchema = z.object({
    conflictDetails: SystemConflictMetricsSchema.nullish(),
    conflicts: z.number().int(),
    deadlocks: z.number().int(),
    sizeBytes: z.number().int(),
    sizeFormatted: z.string(),
    transactionsCommitted: z.number().int(),
    transactionsRolledBack: z.number().int(),
});
//# sourceMappingURL=database-metrics.js.map