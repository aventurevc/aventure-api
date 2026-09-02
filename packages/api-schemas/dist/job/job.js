// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobSchemaDefinition = z.object({
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Failure reason if failed */
    failureReason: z.string().nullish(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Job name/description */
    jobName: z.string(),
    /** Job type category */
    jobType: z.string(),
    /** Current state */
    state: z.string(),
    /** Last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Background job list item
 *
 * @openapiSchema Job
 * @endpoint GET /v1/jobs/runs
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}/status
 * @endpoint POST /v1/jobs/runs/{jobId}/requeue
 * @endpoint DELETE /v1/jobs/runs/{jobId}
 * @usedBySchema PageJobSchema
 * @contractShape job.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/Job.kt
 */
export const JobSchema = JobSchemaDefinition;
//# sourceMappingURL=job.js.map