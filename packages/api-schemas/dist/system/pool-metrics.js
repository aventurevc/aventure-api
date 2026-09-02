// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemHealthStatusSchema } from "./health-status.js";
/**
 * Pool metrics
 *
 * @openapiSchema SystemPoolMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.pool-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/pool/PoolMetrics.kt
 */
export const SystemPoolMetricsSchema = z.object({
    clientMaxWaitSeconds: z.number(),
    clientWaitingConnections: z.int(),
    clientWaitTotalSeconds: z.number(),
    freeClients: z.int(),
    freeServers: z.int(),
    isHealthy: z.boolean(),
    maxClientConnections: z.int(),
    maxConnections: z.int(),
    pgbouncerUp: z.boolean(),
    pgrstPoolAvailable: z.int(),
    pgrstPoolMax: z.int(),
    pgrstPoolTimeouts: z.number().int(),
    pgrstPoolWaiting: z.int(),
    /** Canonical pool-health severity derived from connection pressure and wait time. */
    status: SystemHealthStatusSchema,
    usedClients: z.int(),
});
//# sourceMappingURL=pool-metrics.js.map