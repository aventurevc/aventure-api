import { z } from "zod/v4";
declare const AppJobRunSchemaDefinition: z.ZodObject<{
    completedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fenceToken: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    jobKey: z.ZodString;
    jobrunrJobId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    leaseOwnerInstanceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestedAt: z.ZodISODateTime;
    runId: z.ZodUUID;
    semanticKey: z.ZodString;
    startedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    status: z.ZodEnum<{
        CANCELED: "CANCELED";
        ENQUEUED: "ENQUEUED";
        FAILED: "FAILED";
        FENCED_OUT: "FENCED_OUT";
        REQUESTED: "REQUESTED";
        RUNNING: "RUNNING";
        SKIPPED: "SKIPPED";
        SUCCEEDED: "SUCCEEDED";
    }>;
}, z.core.$strip>;
type AppJobRunDefinition = z.infer<typeof AppJobRunSchemaDefinition>;
/**
 * Execution ledger row for an app job run
 *
 * @openapiSchema AppJobRun
 * @endpoint GET /v1/jobs/{jobKey}/runs
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema AppJobRunDetailSchema
 * @contractShape app.job-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJobRun.kt
 */
export declare const AppJobRunSchema: z.ZodType<AppJobRunDefinition>;
export type AppJobRun = z.infer<typeof AppJobRunSchema>;
export {};
//# sourceMappingURL=job-run.d.ts.map