import { z } from "zod/v4";
declare const SystemDatabaseDiagnosticsSchemaDefinition: z.ZodObject<{
    blockingTransaction: z.ZodArray<z.ZodType<{
        applicationName?: string | null | undefined;
        duration: string;
        pid: number;
        query?: string | null | undefined;
        rawBlockingPids?: number[] | undefined;
        user?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        applicationName?: string | null | undefined;
        duration: string;
        pid: number;
        query?: string | null | undefined;
        rawBlockingPids?: number[] | undefined;
        user?: string | null | undefined;
    }, unknown>>>;
    indexUsage: z.ZodArray<z.ZodType<{
        idxScan: number;
        indexName: string;
        seqScan: number;
        sizePretty: string;
        tableName: string;
    }, unknown, z.core.$ZodTypeInternals<{
        idxScan: number;
        indexName: string;
        seqScan: number;
        sizePretty: string;
        tableName: string;
    }, unknown>>>;
    poolStatus: z.ZodArray<z.ZodType<{
        applicationName?: string | null | undefined;
        count: number;
        state?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        applicationName?: string | null | undefined;
        count: number;
        state?: string | null | undefined;
    }, unknown>>>;
    slowQuery: z.ZodArray<z.ZodType<{
        applicationName?: string | null | undefined;
        duration: string;
        pid: number;
        query?: string | null | undefined;
        state: string;
        user?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        applicationName?: string | null | undefined;
        duration: string;
        pid: number;
        query?: string | null | undefined;
        state: string;
        user?: string | null | undefined;
    }, unknown>>>;
}, z.core.$strip>;
type SystemDatabaseDiagnosticsDefinition = z.infer<typeof SystemDatabaseDiagnosticsSchemaDefinition>;
/**
 * Database diagnostics
 *
 * @openapiSchema SystemDatabaseDiagnostics
 * @endpoint GET /v1/database/diagnostics
 * @contractShape system.database-diagnostics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/database/DatabaseDiagnostics.kt
 */
export declare const SystemDatabaseDiagnosticsSchema: z.ZodType<SystemDatabaseDiagnosticsDefinition>;
export type SystemDatabaseDiagnostics = z.infer<typeof SystemDatabaseDiagnosticsSchema>;
export {};
//# sourceMappingURL=database-diagnostics.d.ts.map