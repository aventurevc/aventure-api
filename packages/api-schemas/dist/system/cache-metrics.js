// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemHealthStatusSchema } from "./health-status.js";
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
export const SystemCacheMetricsSchema = z.object({
    blocksHit: z.number().int(),
    blocksRead: z.number().int(),
    hitRatioPercent: z.number(),
    isHealthy: z.boolean(),
    /** Canonical cache-health severity derived from the cache hit ratio. */
    status: SystemHealthStatusSchema,
    tempBytesWritten: z.number().int(),
    tempFilesCreated: z.number().int(),
});
//# sourceMappingURL=cache-metrics.js.map