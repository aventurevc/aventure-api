// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
import { WebCrawlContentSchema } from "./crawl-content.js";
const WebCrawlJobSchemaDefinition = z.object({
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Failure reason when the crawl failed */
    failureReason: z.string().nullish(),
    /** Unique crawl job identifier */
    jobId: z.uuid(),
    /** Crawled pages, present only once state=COMPLETED. Empty on a COMPLETED job when the crawl discovered no pages or every discovered page was skipped as unfetchable (4xx or bot-walled) — retry with render=true for JS-gated sites. */
    page: z.array(WebCrawlContentSchema),
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
    /** The crawled root URL */
    url: z.string().nullish(),
});
/**
 * Async ephemeral crawl job status with transient per-page content.
 *
 * @openapiSchema WebCrawlJob
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @contractShape web.crawl-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrawlSnapshot.kt
 */
export const WebCrawlJobSchema = WebCrawlJobSchemaDefinition;
//# sourceMappingURL=crawl-job.js.map