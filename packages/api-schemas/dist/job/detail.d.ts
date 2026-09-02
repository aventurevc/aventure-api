import { z } from "zod/v4";
/**
 * Background job detail record
 *
 * @openapiSchema JobDetail
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @contractShape job.detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export declare const JobDetailSchema: z.ZodObject<{
    agentTaskResult: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        envelopeJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fixIteration: z.ZodInt;
        parentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        promptName: z.ZodString;
        promptVersion: z.ZodString;
        skillVersion: z.ZodRecord<z.ZodString, z.ZodString>;
        taskKey: z.ZodString;
        transcriptMessageCount: z.ZodInt;
        usage: z.ZodType<{
            cachedTokens: number;
            completionTokens: number;
            promptTokens: number;
        }, unknown, z.core.$ZodTypeInternals<{
            cachedTokens: number;
            completionTokens: number;
            promptTokens: number;
        }, unknown>>;
        verdictJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    anomalyReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    appJobRunDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        claimHistory: z.ZodArray<z.ZodType<{
            claimAction: string;
            claimedAt: string;
            claimHistoryId: number;
            fenceToken: number;
            jobKey: string;
            leaseOwnerBootId: string;
            leaseOwnerInstanceId: string;
            leaseUntil: string;
            previousFenceToken?: number | null | undefined;
            previousRunId?: string | null | undefined;
            runId: string;
            semanticKey: string;
        }, unknown, z.core.$ZodTypeInternals<{
            claimAction: string;
            claimedAt: string;
            claimHistoryId: number;
            fenceToken: number;
            jobKey: string;
            leaseOwnerBootId: string;
            leaseOwnerInstanceId: string;
            leaseUntil: string;
            previousFenceToken?: number | null | undefined;
            previousRunId?: string | null | undefined;
            runId: string;
            semanticKey: string;
        }, unknown>>>;
        run: z.ZodType<{
            completedAt?: string | null | undefined;
            errorMessage?: string | null | undefined;
            fenceToken?: number | null | undefined;
            jobKey: string;
            jobrunrJobId?: string | null | undefined;
            leaseOwnerInstanceId?: string | null | undefined;
            outcome?: string | null | undefined;
            requestedAt: string;
            runId: string;
            semanticKey: string;
            startedAt?: string | null | undefined;
            status: "CANCELED" | "ENQUEUED" | "FAILED" | "FENCED_OUT" | "REQUESTED" | "RUNNING" | "SKIPPED" | "SUCCEEDED";
        }, unknown, z.core.$ZodTypeInternals<{
            completedAt?: string | null | undefined;
            errorMessage?: string | null | undefined;
            fenceToken?: number | null | undefined;
            jobKey: string;
            jobrunrJobId?: string | null | undefined;
            leaseOwnerInstanceId?: string | null | undefined;
            outcome?: string | null | undefined;
            requestedAt: string;
            runId: string;
            semanticKey: string;
            startedAt?: string | null | undefined;
            status: "CANCELED" | "ENQUEUED" | "FAILED" | "FENCED_OUT" | "REQUESTED" | "RUNNING" | "SKIPPED" | "SUCCEEDED";
        }, unknown>>;
    }, z.core.$strip>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    jobName: z.ZodString;
    jobType: z.ZodString;
    logLine: z.ZodArray<z.ZodType<{
        level?: string | null | undefined;
        loggedAt?: string | null | undefined;
        message: string;
    }, unknown, z.core.$ZodTypeInternals<{
        level?: string | null | undefined;
        loggedAt?: string | null | undefined;
        message: string;
    }, unknown>>>;
    requestJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    responseJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodString;
    stateTransition: z.ZodArray<z.ZodType<{
        createdAt?: string | null | undefined;
        deleteReason?: string | null | undefined;
        exceptionCauseMessage?: string | null | undefined;
        exceptionCauseType?: string | null | undefined;
        exceptionMessage?: string | null | undefined;
        exceptionType?: string | null | undefined;
        failureMessage?: string | null | undefined;
        latencyMillis?: number | null | undefined;
        mustNotRetry?: boolean | null | undefined;
        processMillis?: number | null | undefined;
        scheduledAt?: string | null | undefined;
        scheduleReason?: string | null | undefined;
        serverId?: string | null | undefined;
        serverName?: string | null | undefined;
        state: string;
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        deleteReason?: string | null | undefined;
        exceptionCauseMessage?: string | null | undefined;
        exceptionCauseType?: string | null | undefined;
        exceptionMessage?: string | null | undefined;
        exceptionType?: string | null | undefined;
        failureMessage?: string | null | undefined;
        latencyMillis?: number | null | undefined;
        mustNotRetry?: boolean | null | undefined;
        processMillis?: number | null | undefined;
        scheduledAt?: string | null | undefined;
        scheduleReason?: string | null | undefined;
        serverId?: string | null | undefined;
        serverName?: string | null | undefined;
        state: string;
        updatedAt?: string | null | undefined;
    }, unknown>>>;
    transportAvailable: z.ZodBoolean;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type JobDetail = z.infer<typeof JobDetailSchema>;
//# sourceMappingURL=detail.d.ts.map