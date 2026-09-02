import { z } from "zod/v4";
/**
 * Pool metrics
 *
 * @openapiSchema SystemPoolMetrics
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @usedBySchema SystemSupabaseTelemetrySchema
 * @contractShape system.pool-metrics
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/pool/PoolMetrics.kt
 */
export declare const SystemPoolMetricsSchema: z.ZodObject<{
    clientMaxWaitSeconds: z.ZodNumber;
    clientWaitingConnections: z.ZodInt;
    clientWaitTotalSeconds: z.ZodNumber;
    freeClients: z.ZodInt;
    freeServers: z.ZodInt;
    isHealthy: z.ZodBoolean;
    maxClientConnections: z.ZodInt;
    maxConnections: z.ZodInt;
    pgbouncerUp: z.ZodBoolean;
    pgrstPoolAvailable: z.ZodInt;
    pgrstPoolMax: z.ZodInt;
    pgrstPoolTimeouts: z.ZodNumber;
    pgrstPoolWaiting: z.ZodInt;
    status: z.ZodEnum<{
        critical: "critical";
        healthy: "healthy";
        warning: "warning";
    }>;
    usedClients: z.ZodInt;
}, z.core.$strip>;
export type SystemPoolMetrics = z.infer<typeof SystemPoolMetricsSchema>;
//# sourceMappingURL=pool-metrics.d.ts.map