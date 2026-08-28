// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
const CrawlRunJobSchemaDefinition = z.object({
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Registrable domain being crawled */
    domain: z.string().nullish(),
    /** Failure reason when the crawl failed */
    failureReason: z.string().nullish(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Crawl-run job status snapshot.
 *
 * @openapiSchema CrawlRunJob
 * @endpoint GET /v1/entities/detail/crawl-runs/jobs/{jobId}
 * @endpoint GET /v1/people/detail/crawl-runs/jobs/{jobId}
 * @contractShape crawl.run-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/webcrawl/CrawlRunJob.kt
 */
export const CrawlRunJobSchema = CrawlRunJobSchemaDefinition;
//# sourceMappingURL=run-job.js.map