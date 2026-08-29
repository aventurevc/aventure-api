// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Output kind for governed research detail values
 *
 * @openapiSchema EntityResearchValueType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/research/details/types
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchFactValueSchema
 * @usedBySchema ResearchDetailTypeSchema
 * @contractShape entity.research-value-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/EntityResearchValueType.kt
 */
export const EntityResearchValueTypeSchema = z.enum([
    "text",
    "numeric",
    "monetary",
    "percentage",
    "date",
]);
//# sourceMappingURL=research-value-type.js.map