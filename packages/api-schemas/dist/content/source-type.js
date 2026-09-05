// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Discriminator for unified content embedding source partitions
 *
 * @openapiSchema ContentSourceType
 * @endpoint GET /v1/content/embedding/activity
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint GET /v1/content/embedding/neighbors
 * @endpoint GET /v1/content/embedding/stale
 * @endpoint GET /v1/content/similarity/stale
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/content/embedding/refresh
 * @endpoint POST /v1/content/embedding/refresh/sweep
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/content/embedding
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingActivitySchema
 * @usedBySchema ContentEmbeddingBacklogTypeCountSchema
 * @usedBySchema ContentEmbeddingBacklogWorkSchema
 * @usedBySchema ContentEmbeddingMatchSchema
 * @usedBySchema ContentEmbeddingMutationSchema
 * @usedBySchema ContentEmbeddingOwnerActivitySchema
 * @contractShape content.source-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentSourceType.kt
 */
export const ContentSourceTypeSchema = z.enum([
    "entity",
    "person",
    "newsArticle",
    "blogPost",
    "text",
    "classificationTag",
    "classificationCode",
    "product",
    "service",
    "agentHelpDoc",
]);
//# sourceMappingURL=source-type.js.map