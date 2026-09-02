// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemServiceSqlConnectionSchemaDefinition = z.object({
    closedMaxIdleTimeTotal: z.number().int(),
    closedMaxIdleTotal: z.number().int(),
    closedMaxLifetimeTotal: z.number().int(),
    maxOpen: z.int(),
    openIdle: z.int(),
    openInUse: z.int(),
    serviceType: z.string(),
    waitDurationMsTotal: z.number(),
    waitTotal: z.number().int(),
});
/**
 * Service SQL connection
 *
 * @openapiSchema SystemServiceSqlConnection
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.service-sql-connection
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/service/ServiceSqlConnection.kt
 */
export const SystemServiceSqlConnectionSchema = SystemServiceSqlConnectionSchemaDefinition;
//# sourceMappingURL=service-sql-connection.js.map