// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemBlockingTransactionSchemaDefinition = z.object({
    applicationName: z.string().nullish(),
    duration: z.string(),
    pid: z.int(),
    query: z.string().nullish(),
    rawBlockingPids: z.array(z.int()).optional(),
    user: z.string().nullish(),
});
/**
 * Blocking transaction
 *
 * @openapiSchema SystemBlockingTransaction
 * @endpoint GET /v1/database/diagnostics
 * @usedBySchema SystemDatabaseDiagnosticsSchema
 * @contractShape system.blocking-transaction
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/BlockingTransaction.kt
 */
export const SystemBlockingTransactionSchema = SystemBlockingTransactionSchemaDefinition;
//# sourceMappingURL=blocking-transaction.js.map