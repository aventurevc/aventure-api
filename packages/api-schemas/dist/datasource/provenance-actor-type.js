// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Actor boundary for a provenance write event
 *
 * @openapiSchema DatasourceProvenanceActorType
 * @endpoint GET /v1/provenance/history
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint POST /v1/entities/{entityId}/addresses
 * @endpoint POST /v1/entities/{entityId}/blog-posts
 * @endpoint POST /v1/entities/{entityId}/classifications
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/{entityId}/people
 * @endpoint POST /v1/entities/{entityId}/relationships
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint POST /v1/entities/{entityId}/texts
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/entities/{entityId}/urls
 * @endpoint POST /v1/entities/classifications/reconcile
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/fundraise-investor-joins
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint POST /v1/entities/detail/news
 * @endpoint POST /v1/entities/merge
 * @endpoint POST /v1/entities/relationships/join
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/logo-audit/jobs
 * @endpoint POST /v1/media/news-thumbnail/import
 * @endpoint POST /v1/media/retrofit/jobs
 * @endpoint POST /v1/media/screenshots
 * @endpoint POST /v1/media/upload
 * @endpoint POST /v1/news/detail
 * @endpoint POST /v1/people/{personId}/addresses
 * @endpoint POST /v1/people/{personId}/blog-posts
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint POST /v1/people/{personId}/texts
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @endpoint POST /v1/people/{personId}/urls
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/news
 * @endpoint POST /v1/people/merge
 * @endpoint POST /v1/sec/entities/{entityId}/address
 * @endpoint POST /v1/sec/entities/{entityId}/aliases
 * @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
 * @endpoint POST /v1/sec/entities/{entityId}/identifiers
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PATCH /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
 * @endpoint PATCH /v1/entities/{entityId}/slug
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PATCH /v1/entities/detail/fundraise-investor-joins
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PATCH /v1/entities/detail/news/{newsId}
 * @endpoint PATCH /v1/entities/relationships/{relationshipId}
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/news/detail
 * @endpoint PATCH /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PATCH /v1/people/{personId}/slug
 * @endpoint PATCH /v1/people/{personId}/texts/{textId}
 * @endpoint PATCH /v1/people/{personId}/urls/{urlId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PATCH /v1/people/detail/news/{newsId}
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/{entityId}/people/{associationId}
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint PUT /v1/entities/{entityId}/texts/{textId}
 * @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/detail/fundraise-investor-joins
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/detail/news/{newsId}
 * @endpoint PUT /v1/news/detail
 * @endpoint PUT /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/people/{personId}/texts/{textId}
 * @endpoint PUT /v1/people/{personId}/urls/{urlId}
 * @endpoint PUT /v1/people/detail
 * @endpoint PUT /v1/people/detail/news/{newsId}
 * @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint DELETE /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
 * @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint DELETE /v1/entities/{entityId}/slug/redirects/{redirectId}
 * @endpoint DELETE /v1/entities/{entityId}/texts/{textId}
 * @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
 * @endpoint DELETE /v1/entities/detail
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint DELETE /v1/entities/detail/fundraise-investor-joins
 * @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/detail/news/{newsId}
 * @endpoint DELETE /v1/entities/relationships/{relationshipId}
 * @endpoint DELETE /v1/media/delete
 * @endpoint DELETE /v1/news/{newsId}/slug/redirects/{redirectId}
 * @endpoint DELETE /v1/news/detail
 * @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint DELETE /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
 * @endpoint DELETE /v1/people/{personId}/slug/redirects/{redirectId}
 * @endpoint DELETE /v1/people/{personId}/texts/{textId}
 * @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint DELETE /v1/people/{personId}/urls/{urlId}
 * @endpoint DELETE /v1/people/detail
 * @endpoint DELETE /v1/people/detail/news/{newsId}
 * @usedBySchema DatasourceProvenanceActorSchema
 * @usedBySchema DatasourceProvenanceSourceSchema
 * @contractShape datasource.provenance-actor-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export const DatasourceProvenanceActorTypeSchema = z.enum(["agent", "employee"]);
//# sourceMappingURL=provenance-actor-type.js.map