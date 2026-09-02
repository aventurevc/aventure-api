import { z } from "zod/v4";
declare const SystemPoolStatusSchemaDefinition: z.ZodObject<{
    applicationName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    count: z.ZodInt;
    state: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SystemPoolStatusDefinition = z.infer<typeof SystemPoolStatusSchemaDefinition>;
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
export declare const SystemPoolStatusSchema: z.ZodType<SystemPoolStatusDefinition>;
export type SystemPoolStatus = z.infer<typeof SystemPoolStatusSchema>;
export {};
//# sourceMappingURL=pool-status.d.ts.map