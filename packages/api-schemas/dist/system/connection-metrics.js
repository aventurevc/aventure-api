// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Connection metrics
 *
 * @openapiSchema SystemConnectionMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.connection-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/connection/ConnectionMetrics.kt
 */
export const SystemConnectionMetricsSchema = z.object({
    active: z.int(),
    idle: z.int(),
    idleInTransaction: z.int(),
    total: z.int(),
    waiting: z.int(),
});
//# sourceMappingURL=connection-metrics.js.map