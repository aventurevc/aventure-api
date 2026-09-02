// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemIndexUsageSchemaDefinition = z.object({
    idxScan: z.number().int(),
    indexName: z.string(),
    seqScan: z.number().int(),
    sizePretty: z.string(),
    tableName: z.string(),
});
/**
 * Index usage
 *
 * @openapiSchema SystemIndexUsage
 * @endpoint GET /v1/database/diagnostics
 * @usedBySchema SystemDatabaseDiagnosticsSchema
 * @contractShape system.index-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/IndexUsage.kt
 */
export const SystemIndexUsageSchema = SystemIndexUsageSchemaDefinition;
//# sourceMappingURL=index-usage.js.map