// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemServiceSqlLatencySchemaDefinition = z.object({
    avgMs: z.number(),
    count: z.number().int(),
    method: z.string(),
    p50Ms: z.number(),
    p95Ms: z.number(),
    p99Ms: z.number(),
    serviceType: z.string(),
    status: z.string(),
    totalMs: z.number(),
});
/**
 * Service SQL latency
 *
 * @openapiSchema SystemServiceSqlLatency
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.service-sql-latency
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/service/ServiceSqlLatency.kt
 */
export const SystemServiceSqlLatencySchema = SystemServiceSqlLatencySchemaDefinition;
//# sourceMappingURL=service-sql-latency.js.map