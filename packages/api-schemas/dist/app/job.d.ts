import { z } from "zod/v4";
declare const AppJobSchemaDefinition: z.ZodObject<{
    activeInstanceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    activeInstanceLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    activeRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    concurrencyPoolKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    configVersion: z.ZodInt;
    defaultRunEnabled: z.ZodBoolean;
    displayName: z.ZodString;
    enabled: z.ZodBoolean;
    executionScope: z.ZodEnum<{
        LOCAL_INSTANCE: "LOCAL_INSTANCE";
        SHARED_CLUSTER: "SHARED_CLUSTER";
    }>;
    fenceToken: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    heartbeatAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    invocationEnabled: z.ZodBoolean;
    jobKey: z.ZodString;
    lastCompletedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    lastRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    lastScheduledAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    lastStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        CANCELED: "CANCELED";
        ENQUEUED: "ENQUEUED";
        FAILED: "FAILED";
        FENCED_OUT: "FENCED_OUT";
        REQUESTED: "REQUESTED";
        RUNNING: "RUNNING";
        SKIPPED: "SKIPPED";
        SUCCEEDED: "SUCCEEDED";
    }>>>;
    leaseUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    nextScheduledAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    retiredAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    scheduleExpression: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scheduleType: z.ZodEnum<{
        CRON: "CRON";
        DURATION: "DURATION";
        NONE: "NONE";
    }>;
    semanticKeyPattern: z.ZodString;
}, z.core.$strip>;
type AppJobDefinition = z.infer<typeof AppJobSchemaDefinition>;
/**
 * App-owned background job
 *
 * @openapiSchema AppJob
 * @endpoint GET /v1/jobs
 * @endpoint GET /v1/jobs/{jobKey}
 * @endpoint PATCH /v1/jobs/{jobKey}
 * @contractShape app.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJob.kt
 */
export declare const AppJobSchema: z.ZodType<AppJobDefinition>;
export type AppJob = z.infer<typeof AppJobSchema>;
export {};
//# sourceMappingURL=job.d.ts.map