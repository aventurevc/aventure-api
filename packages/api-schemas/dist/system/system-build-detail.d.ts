import { z } from "zod/v4";
declare const SystemBuildDetailSchemaDefinition: z.ZodObject<{
    artifact: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    revision: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    time: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SystemBuildDetailDefinition = z.infer<typeof SystemBuildDetailSchemaDefinition>;
/**
 * Application build metadata
 *
 * @openapiSchema SystemBuildDetail
 * @endpoint GET /info
 * @usedBySchema SystemBuildSchema
 * @contractShape system.system-build-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/metrics/controller/InfoAliasController.kt
 */
export declare const SystemBuildDetailSchema: z.ZodType<SystemBuildDetailDefinition>;
export type SystemBuildDetail = z.infer<typeof SystemBuildDetailSchema>;
export {};
//# sourceMappingURL=system-build-detail.d.ts.map