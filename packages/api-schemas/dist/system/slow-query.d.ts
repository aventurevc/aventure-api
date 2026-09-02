import { z } from "zod/v4";
declare const SystemSlowQuerySchemaDefinition: z.ZodObject<{
    applicationName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    duration: z.ZodString;
    pid: z.ZodInt;
    query: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodString;
    user: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SystemSlowQueryDefinition = z.infer<typeof SystemSlowQuerySchemaDefinition>;
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
export declare const SystemSlowQuerySchema: z.ZodType<SystemSlowQueryDefinition>;
export type SystemSlowQuery = z.infer<typeof SystemSlowQuerySchema>;
export {};
//# sourceMappingURL=slow-query.d.ts.map