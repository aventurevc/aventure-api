// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical health severity for Supabase telemetry metrics.
 *
 * @openapiSchema SystemHealthStatus
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemCacheMetricsSchema
 * @usedBySchema SystemMetricsSchema
 * @usedBySchema SystemPoolMetricsSchema
 * @usedBySchema SystemQueryStatsSchema
 * @contractShape system.health-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/telemetry/SystemHealthStatus.kt
 */
export const SystemHealthStatusSchema = z.enum(["healthy", "warning", "critical"]);
//# sourceMappingURL=health-status.js.map