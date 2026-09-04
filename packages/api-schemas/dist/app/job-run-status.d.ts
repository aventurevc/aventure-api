import { z } from "zod/v4";
/**
 * Lifecycle state of one app-job run.
 *
 * @openapiSchema AppJobRunStatus
 * @endpoint GET /v1/jobs
 * @endpoint GET /v1/jobs/{jobKey}
 * @endpoint GET /v1/jobs/{jobKey}/runs
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @endpoint PATCH /v1/jobs/{jobKey}
 * @usedBySchema AppJobRunSchema
 * @usedBySchema AppJobSchema
 * @contractShape app.job-run-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJob.kt
 */
export declare const AppJobRunStatusSchema: z.ZodEnum<{
    CANCELED: "CANCELED";
    ENQUEUED: "ENQUEUED";
    FAILED: "FAILED";
    FENCED_OUT: "FENCED_OUT";
    REQUESTED: "REQUESTED";
    RUNNING: "RUNNING";
    SKIPPED: "SKIPPED";
    SUCCEEDED: "SUCCEEDED";
}>;
export type AppJobRunStatus = z.infer<typeof AppJobRunStatusSchema>;
//# sourceMappingURL=job-run-status.d.ts.map