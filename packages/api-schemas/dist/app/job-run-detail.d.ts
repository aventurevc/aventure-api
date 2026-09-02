import { z } from "zod/v4";
/**
 * Control-plane ledger detail for one app job run
 *
 * @openapiSchema AppJobRunDetail
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape app.job-run-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export declare const AppJobRunDetailSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type AppJobRunDetail = z.infer<typeof AppJobRunDetailSchema>;
//# sourceMappingURL=job-run-detail.d.ts.map