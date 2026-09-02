import { z } from "zod/v4";
declare const SystemIndexUsageSchemaDefinition: z.ZodObject<{
    idxScan: z.ZodNumber;
    indexName: z.ZodString;
    seqScan: z.ZodNumber;
    sizePretty: z.ZodString;
    tableName: z.ZodString;
}, z.core.$strip>;
type SystemIndexUsageDefinition = z.infer<typeof SystemIndexUsageSchemaDefinition>;
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
export declare const SystemIndexUsageSchema: z.ZodType<SystemIndexUsageDefinition>;
export type SystemIndexUsage = z.infer<typeof SystemIndexUsageSchema>;
export {};
//# sourceMappingURL=index-usage.d.ts.map