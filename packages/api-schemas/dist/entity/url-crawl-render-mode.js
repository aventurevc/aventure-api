// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * JavaScript rendering requirement for crawl checks.
 *
 * @openapiSchema EntityUrlCrawlRenderMode
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/urls
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint POST /v1/people/{personId}/urls
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
 * @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PATCH /v1/people/{personId}/urls/{urlId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/people/{personId}/urls/{urlId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
 * @endpoint DELETE /v1/people/{personId}/urls/{urlId}
 * @usedBySchema EntityUrlLinkMutationSchema
 * @usedBySchema EntityUrlLinkSchema
 * @contractShape entity.url-crawl-render-mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/CrawlMetadata.kt
 */
export const EntityUrlCrawlRenderModeSchema = z.enum(["static", "jsRequired", "jsEnhanced"]);
//# sourceMappingURL=url-crawl-render-mode.js.map