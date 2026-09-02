import { z } from "zod/v4";
declare const SystemBlockingTransactionSchemaDefinition: z.ZodObject<{
    applicationName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    duration: z.ZodString;
    pid: z.ZodInt;
    query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawBlockingPids: z.ZodOptional<z.ZodArray<z.ZodInt>>;
    user: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SystemBlockingTransactionDefinition = z.infer<typeof SystemBlockingTransactionSchemaDefinition>;
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
export declare const SystemBlockingTransactionSchema: z.ZodType<SystemBlockingTransactionDefinition>;
export type SystemBlockingTransaction = z.infer<typeof SystemBlockingTransactionSchema>;
export {};
//# sourceMappingURL=blocking-transaction.d.ts.map