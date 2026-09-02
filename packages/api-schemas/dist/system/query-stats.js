// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemHealthStatusSchema } from "./health-status.js";
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
export const SystemQueryStatsSchema = z.object({
    /** Average query duration formatted by the canonical telemetry owner. */
    averageQueryFormatted: z.string(),
    isHealthy: z.boolean(),
    /** Longest transaction duration formatted by the canonical telemetry owner. */
    longestTransactionFormatted: z.string(),
    longestTransactionSeconds: z.number(),
    /** Canonical query-health severity derived from query latency and transaction age. */
    status: SystemHealthStatusSchema,
    totalQueries: z.number().int(),
    totalTimeSeconds: z.number(),
});
//# sourceMappingURL=query-stats.js.map