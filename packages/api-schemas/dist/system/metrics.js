// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemHealthStatusSchema } from "./health-status.js";
/**
 * System metrics
 *
 * @openapiSchema SystemMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/system/SystemMetrics.kt
 */
export const SystemMetricsSchema = z.object({
    isHealthy: z.boolean(),
    load1: z.number(),
    load15: z.number(),
    load5: z.number(),
    postgresRestarts: z.number().int(),
    /** Canonical system-health severity derived from load and WAL size. */
    status: SystemHealthStatusSchema,
    walSizeMb: z.number(),
});
//# sourceMappingURL=metrics.js.map