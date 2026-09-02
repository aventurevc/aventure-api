// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Crawl4ai markdown filter mode.
 *
 * @openapiSchema WebMarkdownFilter
 * @endpoint GET /v1/web/page
 * @endpoint GET /v1/web/pages
 * @usedBySchema WebPageContentSchema
 * @contractShape web.markdown-filter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPageContent.kt
 */
export const WebMarkdownFilterSchema = z.enum(["FIT", "RAW"]);
//# sourceMappingURL=markdown-filter.js.map