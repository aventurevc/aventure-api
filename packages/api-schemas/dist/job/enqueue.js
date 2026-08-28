// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobEnqueueSchemaDefinition = z.object({
    jobId: z.uuid(),
    mode: z.string(),
    /** Endpoint to poll for asynchronous job state and result. */
    statusUrl: z.string(),
});
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint GET /v1/entities/detail/crawl-runs
 * @endpoint GET /v1/people/detail/crawl-runs
 * @endpoint PATCH /v1/entities/detail/crawl-runs
 * @endpoint PATCH /v1/people/detail/crawl-runs
 * @contractShape job.enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobEnqueue.kt
 */
export const JobEnqueueSchema = JobEnqueueSchemaDefinition;
//# sourceMappingURL=enqueue.js.map