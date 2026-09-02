// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Named quality gates for entity list endpoints.
 *
 * @openapiSchema EntityListQualityGate
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema EntityFilterSchema
 * @contractShape entity.list-quality-gate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/filter/entity/EntityListQualityGate.kt
 */
export const EntityListQualityGateSchema = z.enum(["NONE", "COMPANY_LISTING_READY"]);
//# sourceMappingURL=list-quality-gate.js.map