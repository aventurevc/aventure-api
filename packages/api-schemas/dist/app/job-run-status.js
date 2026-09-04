// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const AppJobRunStatusSchema = z.enum([
    "REQUESTED",
    "ENQUEUED",
    "RUNNING",
    "SUCCEEDED",
    "SKIPPED",
    "FAILED",
    "CANCELED",
    "FENCED_OUT",
]);
//# sourceMappingURL=job-run-status.js.map