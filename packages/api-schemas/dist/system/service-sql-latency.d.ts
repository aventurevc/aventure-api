import { z } from "zod/v4";
declare const SystemServiceSqlLatencySchemaDefinition: z.ZodObject<{
    avgMs: z.ZodNumber;
    count: z.ZodNumber;
    method: z.ZodString;
    p50Ms: z.ZodNumber;
    p95Ms: z.ZodNumber;
    p99Ms: z.ZodNumber;
    serviceType: z.ZodString;
    status: z.ZodString;
    totalMs: z.ZodNumber;
}, z.core.$strip>;
type SystemServiceSqlLatencyDefinition = z.infer<typeof SystemServiceSqlLatencySchemaDefinition>;
/**
 * Service SQL latency
 *
 * @openapiSchema SystemServiceSqlLatency
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.service-sql-latency
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/service/ServiceSqlLatency.kt
 */
export declare const SystemServiceSqlLatencySchema: z.ZodType<SystemServiceSqlLatencyDefinition>;
export type SystemServiceSqlLatency = z.infer<typeof SystemServiceSqlLatencySchema>;
export {};
//# sourceMappingURL=service-sql-latency.d.ts.map