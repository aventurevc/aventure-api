import { z } from "zod/v4";
declare const SystemServiceSqlConnectionSchemaDefinition: z.ZodObject<{
    closedMaxIdleTimeTotal: z.ZodNumber;
    closedMaxIdleTotal: z.ZodNumber;
    closedMaxLifetimeTotal: z.ZodNumber;
    maxOpen: z.ZodInt;
    openIdle: z.ZodInt;
    openInUse: z.ZodInt;
    serviceType: z.ZodString;
    waitDurationMsTotal: z.ZodNumber;
    waitTotal: z.ZodNumber;
}, z.core.$strip>;
type SystemServiceSqlConnectionDefinition = z.infer<typeof SystemServiceSqlConnectionSchemaDefinition>;
/**
 * Service SQL connection
 *
 * @openapiSchema SystemServiceSqlConnection
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.service-sql-connection
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/service/ServiceSqlConnection.kt
 */
export declare const SystemServiceSqlConnectionSchema: z.ZodType<SystemServiceSqlConnectionDefinition>;
export type SystemServiceSqlConnection = z.infer<typeof SystemServiceSqlConnectionSchema>;
export {};
//# sourceMappingURL=service-sql-connection.d.ts.map