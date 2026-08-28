// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Confidence tier stored verbatim in res_entity_detail.data_confidence.
 *
 * @openapiSchema EntityValuationDataConfidence
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people/time-series
 * @endpoint GET /v1/entities/detail/similar
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
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
 * @usedBySchema EntityResearchDetailMutationSchema
 * @usedBySchema EntityResearchDetailSchema
 * @usedBySchema EntityResearchFactValueSchema
 * @usedBySchema EntityValuationMutationSchema
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-data-confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationTimeSeriesPoint.kt
 */
export const EntityValuationDataConfidenceSchema = z.enum(["low", "medium", "high"]);
//# sourceMappingURL=valuation-data-confidence.js.map