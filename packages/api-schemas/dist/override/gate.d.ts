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
export declare const OverrideGateSchema: z.ZodEnum<{
    "brand-match": "brand-match";
    "current-classification-removal": "current-classification-removal";
    duplicate: "duplicate";
    "entity-publication-requirements": "entity-publication-requirements";
    "news-article-url-fetch": "news-article-url-fetch";
    "news-dated-slug": "news-dated-slug";
    "news-thumbnail-required": "news-thumbnail-required";
    "square-logo-deletion": "square-logo-deletion";
    "type-structure-contradiction": "type-structure-contradiction";
}>;
export type OverrideGate = z.infer<typeof OverrideGateSchema>;
//# sourceMappingURL=gate.d.ts.map