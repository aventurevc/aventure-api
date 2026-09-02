// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebPageSchema } from "./page.js";
const WebCrawlContentSchemaDefinition = z.object({
    /** Server timestamp when the page was crawled */
    crawledAt: z.iso.datetime({ offset: true }),
    /** Anchors discovered on the page; each link's offDomain flag marks external links */
    link: z.array(WebPageSchema),
    /** Extracted page markdown */
    markdown: z.string(),
    /** HTTP status code observed for the page; null for Web Unlocker-served fallbacks */
    statusCode: z.int().nullish(),
    /** Page title when the crawler reported one; null for Web Unlocker-served fallbacks */
    title: z.string().nullish(),
    /** The crawled URL */
    url: z.string(),
});
/**
 * Rich crawl content (markdown + links) of a single fetched public web page.
 *
 * @openapiSchema WebCrawlContent
 * @endpoint GET /v1/web/crawl
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @usedBySchema WebCrawlJobSchema
 * @contractShape web.crawl-content
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrawlContent.kt
 */
export const WebCrawlContentSchema = WebCrawlContentSchemaDefinition;
//# sourceMappingURL=crawl-content.js.map