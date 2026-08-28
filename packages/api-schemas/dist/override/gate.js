// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Write gate that a caller may override after a gate-block ProblemDetail response.
 *
 * @openapiSchema OverrideGate
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/news
 * @endpoint POST /v1/media/upload
 * @endpoint POST /v1/news/detail
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/news
 * @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/news/{newsId}
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/news/detail
 * @endpoint PATCH /v1/people/detail/news/{newsId}
 * @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/news/{newsId}
 * @endpoint PUT /v1/news/detail
 * @endpoint PUT /v1/people/detail/news/{newsId}
 * @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint DELETE /v1/media/delete
 * @contractShape override.gate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/GateOverride.kt
 */
export const OverrideGateSchema = z.enum([
    "duplicate",
    "entity-publication-requirements",
    "square-logo-deletion",
    "current-classification-removal",
    "news-thumbnail-required",
    "news-article-url-fetch",
    "news-dated-slug",
    "brand-match",
    "type-structure-contradiction",
]);
//# sourceMappingURL=gate.js.map