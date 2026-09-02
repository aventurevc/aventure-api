// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebMarkdownFilterSchema } from "./markdown-filter.js";
const WebPageContentSchemaDefinition = z.object({
    /** Server timestamp when the page was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** Markdown variant that produced the body: FIT (crawl4ai filtered) or RAW (crawl4ai unfiltered fallback, or the Web Unlocker escalation) */
    filter: WebMarkdownFilterSchema,
    /** Extracted page markdown */
    markdown: z.string(),
    /** Whether the serving fetcher reported the fetch as successful. success=true with empty markdown means the page rendered but yielded no extractable content. */
    success: z.boolean(),
    /** The fetched URL */
    url: z.string(),
});
/**
 * Markdown content of a single fetched public web page.
 *
 * @openapiSchema WebPageContent
 * @endpoint GET /v1/web/page
 * @endpoint GET /v1/web/pages
 * @contractShape web.page-content
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPageContent.kt
 */
export const WebPageContentSchema = WebPageContentSchemaDefinition;
//# sourceMappingURL=page-content.js.map