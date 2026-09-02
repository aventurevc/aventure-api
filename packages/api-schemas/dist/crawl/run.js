// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const CrawlRunSchemaDefinition = z.object({
    /** Identifier used to correlate crawl status */
    correlationId: z.string().nullish(),
    /** Registrable domain used to deduplicate the crawl */
    domain: z.string(),
    /** Entity or person that owns the website */
    owner: EntityPersonOwnerSchema,
    /** Whether to render pages before crawl discovery */
    render: z.boolean(),
    /** Website URL to crawl */
    url: z.string(),
});
/**
 * Manual crawl-run app-job payload.
 *
 * @openapiSchema CrawlRun
 * @endpoint POST /v1/jobs/crawl-runs/runs
 * @contractShape crawl.run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/application/usecase/job/CrawlRun.kt
 */
export const CrawlRunSchema = CrawlRunSchemaDefinition;
//# sourceMappingURL=run.js.map