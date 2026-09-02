// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobTypeSummarySchemaDefinition = z.object({
    /** Human-readable job type name */
    displayName: z.string(),
    /** Jobs in queue */
    enqueued: z.int(),
    /** Failed jobs */
    failed: z.int(),
    /** Job type identifier */
    jobType: z.string(),
    /** Jobs currently processing */
    processing: z.int(),
    /** Recent succeeded jobs */
    succeeded: z.int(),
    /** Total active jobs for this job type */
    totalActive: z.int(),
});
/**
 * Statistics for a job type category
 *
 * @openapiSchema JobTypeSummary
 * @endpoint GET /v1/jobs/overview
 * @endpoint POST /v1/jobs/overview
 * @usedBySchema JobOverviewSchema
 * @contractShape job.type-summary
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobTypeSummary.kt
 */
export const JobTypeSummarySchema = JobTypeSummarySchemaDefinition;
//# sourceMappingURL=type-summary.js.map