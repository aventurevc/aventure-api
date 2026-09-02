// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobLogLineSchemaDefinition = z.object({
    /** Log severity */
    level: z.string().nullish(),
    /** Log timestamp */
    loggedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Log message */
    message: z.string(),
});
/**
 * JobRunr dashboard log entry
 *
 * @openapiSchema JobLogLine
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape job.log-line
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const JobLogLineSchema = JobLogLineSchemaDefinition;
//# sourceMappingURL=log-line.js.map