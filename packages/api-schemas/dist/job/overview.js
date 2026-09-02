// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobTypeSummarySchema } from "./type-summary.js";
const JobOverviewSchemaDefinition = z.object({
    /** Number of deleted or canceled jobs */
    deleted: z.int(),
    /** Number of jobs waiting in queue */
    enqueued: z.int(),
    /** Number of failed jobs requiring attention */
    failed: z.int(),
    /** Timestamp of this overview snapshot */
    generatedAt: z.iso.datetime({ offset: true }),
    /** Recent job activity summaries */
    jobType: z.array(JobTypeSummarySchema),
    /** Number of jobs currently being processed */
    processing: z.int(),
    /** Whether job processing is paused on the local BackgroundJobServer. Recurring schedulers continue to fire; jobs queue and resume on resume. */
    processingPaused: z.boolean(),
    /** Number of jobs scheduled for future execution */
    scheduled: z.int(),
    /** Number of active background job servers */
    serverCount: z.int(),
    /** Whether background job server is running */
    serverRunning: z.boolean(),
    /** Number of successfully completed jobs */
    succeeded: z.int(),
    /** Total active jobs (processing + enqueued + scheduled) */
    totalActive: z.int(),
    /** Total terminal jobs (succeeded + failed + deleted) */
    totalTerminal: z.int(),
});
/**
 * Background job system overview and statistics
 *
 * @openapiSchema JobOverview
 * @endpoint GET /v1/jobs/overview
 * @endpoint POST /v1/jobs/overview
 * @contractShape job.overview
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobOverview.kt
 */
export const JobOverviewSchema = JobOverviewSchemaDefinition;
//# sourceMappingURL=overview.js.map