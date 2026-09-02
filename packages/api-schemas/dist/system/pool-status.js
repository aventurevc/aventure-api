// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemPoolStatusSchemaDefinition = z.object({
    applicationName: z.string().nullish(),
    count: z.int(),
    state: z.string().nullish(),
});
/**
 * Pool status
 *
 * @openapiSchema SystemPoolStatus
 * @endpoint GET /v1/database/diagnostics
 * @usedBySchema SystemDatabaseDiagnosticsSchema
 * @contractShape system.pool-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/PoolStatus.kt
 */
export const SystemPoolStatusSchema = SystemPoolStatusSchemaDefinition;
//# sourceMappingURL=pool-status.js.map