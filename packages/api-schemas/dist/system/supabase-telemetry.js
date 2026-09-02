// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemCacheMetricsSchema } from "./cache-metrics.js";
import { SystemCheckpointMetricsSchema } from "./checkpoint-metrics.js";
import { SystemConnectionMetricsSchema } from "./connection-metrics.js";
import { SystemDatabaseMetricsSchema } from "./database-metrics.js";
import { SystemInstanceTypeSchema } from "./instance-type.js";
import { SystemMetricsSchema } from "./metrics.js";
import { SystemPoolMetricsSchema } from "./pool-metrics.js";
import { SystemQueryStatsSchema } from "./query-stats.js";
import { SystemReplicationMetricsSchema } from "./replication-metrics.js";
import { SystemServiceSqlConnectionSchema } from "./service-sql-connection.js";
import { SystemServiceSqlLatencySchema } from "./service-sql-latency.js";
import { SystemTupleMetricsSchema } from "./tuple-metrics.js";
const SystemSupabaseTelemetrySchemaDefinition = z.object({
    cache: SystemCacheMetricsSchema.nullish(),
    checkpoint: SystemCheckpointMetricsSchema.nullish(),
    connections: SystemConnectionMetricsSchema.nullish(),
    database: SystemDatabaseMetricsSchema.nullish(),
    error: z.string().nullish(),
    instanceName: z.string().nullish(),
    instanceType: SystemInstanceTypeSchema,
    isPrimary: z.boolean(),
    isReplica: z.boolean(),
    pool: SystemPoolMetricsSchema.nullish(),
    queryStats: SystemQueryStatsSchema.nullish(),
    replication: SystemReplicationMetricsSchema.nullish(),
    serviceSqlConnection: z.array(SystemServiceSqlConnectionSchema),
    serviceSqlLatency: z.array(SystemServiceSqlLatencySchema),
    system: SystemMetricsSchema.nullish(),
    timestamp: z.iso.datetime({ offset: true }),
    tuples: SystemTupleMetricsSchema.nullish(),
});
/**
 * Aggregated telemetry data from the Supabase metrics API.
 *
 * @openapiSchema SystemSupabaseTelemetry
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @contractShape system.supabase-telemetry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/telemetry/SupabaseTelemetry.kt
 */
export const SystemSupabaseTelemetrySchema = SystemSupabaseTelemetrySchemaDefinition;
//# sourceMappingURL=supabase-telemetry.js.map