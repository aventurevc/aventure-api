import { z } from "zod/v4";
declare const SystemSupabaseTelemetrySchemaDefinition: z.ZodObject<{
    cache: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        blocksHit: z.ZodNumber;
        blocksRead: z.ZodNumber;
        hitRatioPercent: z.ZodNumber;
        isHealthy: z.ZodBoolean;
        status: z.ZodEnum<{
            critical: "critical";
            healthy: "healthy";
            warning: "warning";
        }>;
        tempBytesWritten: z.ZodNumber;
        tempFilesCreated: z.ZodNumber;
    }, z.core.$strip>>>;
    checkpoint: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        buffersAlloc: z.ZodNumber;
        buffersBackend: z.ZodNumber;
        buffersCheckpoint: z.ZodNumber;
        buffersClean: z.ZodNumber;
        checkpointsRequested: z.ZodNumber;
        checkpointsTimed: z.ZodNumber;
        checkpointSyncSecondsTotal: z.ZodNumber;
        checkpointWriteSecondsTotal: z.ZodNumber;
        maxWrittenClean: z.ZodNumber;
    }, z.core.$strip>>>;
    connections: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        active: z.ZodInt;
        idle: z.ZodInt;
        idleInTransaction: z.ZodInt;
        total: z.ZodInt;
        waiting: z.ZodInt;
    }, z.core.$strip>>>;
    database: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        conflictDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            bufferPinConflicts: z.ZodNumber;
            lockConflicts: z.ZodNumber;
            snapshotConflicts: z.ZodNumber;
            tablespaceConflicts: z.ZodNumber;
        }, z.core.$strip>>>;
        conflicts: z.ZodNumber;
        deadlocks: z.ZodNumber;
        sizeBytes: z.ZodNumber;
        sizeFormatted: z.ZodString;
        transactionsCommitted: z.ZodNumber;
        transactionsRolledBack: z.ZodNumber;
    }, z.core.$strip>>>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instanceName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instanceType: z.ZodEnum<{
        PRIMARY: "PRIMARY";
        REPLICA: "REPLICA";
        UNKNOWN: "UNKNOWN";
    }>;
    isPrimary: z.ZodBoolean;
    isReplica: z.ZodBoolean;
    pool: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    queryStats: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        averageQueryFormatted: z.ZodString;
        isHealthy: z.ZodBoolean;
        longestTransactionFormatted: z.ZodString;
        longestTransactionSeconds: z.ZodNumber;
        status: z.ZodEnum<{
            critical: "critical";
            healthy: "healthy";
            warning: "warning";
        }>;
        totalQueries: z.ZodNumber;
        totalTimeSeconds: z.ZodNumber;
    }, z.core.$strip>>>;
    replication: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        connectedToPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isAvailable: z.ZodBoolean;
        lagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        physicalLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        replayLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        replicationSlotsMaxLagBytes: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        sendLagSeconds: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodString;
        walReplayPaused: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>>;
    serviceSqlConnection: z.ZodArray<z.ZodType<{
        closedMaxIdleTimeTotal: number;
        closedMaxIdleTotal: number;
        closedMaxLifetimeTotal: number;
        maxOpen: number;
        openIdle: number;
        openInUse: number;
        serviceType: string;
        waitDurationMsTotal: number;
        waitTotal: number;
    }, unknown, z.core.$ZodTypeInternals<{
        closedMaxIdleTimeTotal: number;
        closedMaxIdleTotal: number;
        closedMaxLifetimeTotal: number;
        maxOpen: number;
        openIdle: number;
        openInUse: number;
        serviceType: string;
        waitDurationMsTotal: number;
        waitTotal: number;
    }, unknown>>>;
    serviceSqlLatency: z.ZodArray<z.ZodType<{
        avgMs: number;
        count: number;
        method: string;
        p50Ms: number;
        p95Ms: number;
        p99Ms: number;
        serviceType: string;
        status: string;
        totalMs: number;
    }, unknown, z.core.$ZodTypeInternals<{
        avgMs: number;
        count: number;
        method: string;
        p50Ms: number;
        p95Ms: number;
        p99Ms: number;
        serviceType: string;
        status: string;
        totalMs: number;
    }, unknown>>>;
    system: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isHealthy: z.ZodBoolean;
        load1: z.ZodNumber;
        load15: z.ZodNumber;
        load5: z.ZodNumber;
        postgresRestarts: z.ZodNumber;
        status: z.ZodEnum<{
            critical: "critical";
            healthy: "healthy";
            warning: "warning";
        }>;
        walSizeMb: z.ZodNumber;
    }, z.core.$strip>>>;
    timestamp: z.ZodISODateTime;
    tuples: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        tuplesDeleted: z.ZodNumber;
        tuplesFetched: z.ZodNumber;
        tuplesInserted: z.ZodNumber;
        tuplesReturned: z.ZodNumber;
        tuplesUpdated: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type SystemSupabaseTelemetryDefinition = z.infer<typeof SystemSupabaseTelemetrySchemaDefinition>;
/**
 * Aggregated telemetry data from the Supabase metrics API.
 *
 * @openapiSchema SystemSupabaseTelemetry
 * @endpoint GET /v1/supabase/metrics
 * @endpoint GET /v1/supabase/metrics/instances
 * @contractShape system.supabase-telemetry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/supabase/telemetry/SupabaseTelemetry.kt
 */
export declare const SystemSupabaseTelemetrySchema: z.ZodType<SystemSupabaseTelemetryDefinition>;
export type SystemSupabaseTelemetry = z.infer<typeof SystemSupabaseTelemetrySchema>;
export {};
//# sourceMappingURL=supabase-telemetry.d.ts.map