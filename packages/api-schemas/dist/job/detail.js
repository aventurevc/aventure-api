// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskResultMetadataSchema } from "../agent/task-result-metadata.js";
import { AppJobRunDetailSchema } from "../app/job-run-detail.js";
import { JobLogLineSchema } from "./log-line.js";
import { JobStateTransitionSchema } from "./state-transition.js";
/**
 * Background job detail record
 *
 * @openapiSchema JobDetail
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @contractShape job.detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const JobDetailSchema = z.object({
    /** Durable agent-task result metadata when this job executed an agent task */
    agentTaskResult: AgentTaskResultMetadataSchema.nullish(),
    /** Diagnostic note when JobRunr history is corrupted or incomplete */
    anomalyReason: z.string().nullish(),
    /** App-job control-plane ledger detail when this JobRunr job is app-owned */
    appJobRunDetail: AppJobRunDetailSchema.nullish(),
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
    /** Chronological JobRunr dashboard log output */
    logLine: z.array(JobLogLineSchema),
    /** Serialized job command/parameters as JSON for debugging */
    requestJson: z.string().nullish(),
    /** Serialized job result as JSON for debugging */
    responseJson: z.string().nullish(),
    /** Current state */
    state: z.string(),
    /** Chronological JobRunr state transitions */
    stateTransition: z.array(JobStateTransitionSchema),
    /** Whether this deployment can inspect and control the JobRunr transport */
    transportAvailable: z.boolean(),
    /** Last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=detail.js.map