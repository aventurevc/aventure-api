// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemSlowQuerySchemaDefinition = z.object({
    applicationName: z.string().nullish(),
    duration: z.string(),
    pid: z.int(),
    query: z.string().nullish(),
    state: z.string(),
    user: z.string().nullish(),
});
/**
 * Slow query
 *
 * @openapiSchema SystemSlowQuery
 * @endpoint GET /v1/database/diagnostics
 * @usedBySchema SystemDatabaseDiagnosticsSchema
 * @contractShape system.slow-query
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/SlowQuery.kt
 */
export const SystemSlowQuerySchema = SystemSlowQuerySchemaDefinition;
//# sourceMappingURL=slow-query.js.map