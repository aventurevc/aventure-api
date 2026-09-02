// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SystemBlockingTransactionSchema } from "./blocking-transaction.js";
import { SystemIndexUsageSchema } from "./index-usage.js";
import { SystemPoolStatusSchema } from "./pool-status.js";
import { SystemSlowQuerySchema } from "./slow-query.js";
const SystemDatabaseDiagnosticsSchemaDefinition = z.object({
    blockingTransaction: z.array(SystemBlockingTransactionSchema),
    indexUsage: z.array(SystemIndexUsageSchema),
    poolStatus: z.array(SystemPoolStatusSchema),
    slowQuery: z.array(SystemSlowQuerySchema),
});
/**
 * Database diagnostics
 *
 * @openapiSchema SystemDatabaseDiagnostics
 * @endpoint GET /v1/database/diagnostics
 * @contractShape system.database-diagnostics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/DatabaseDiagnostics.kt
 */
export const SystemDatabaseDiagnosticsSchema = SystemDatabaseDiagnosticsSchemaDefinition;
//# sourceMappingURL=database-diagnostics.js.map