import { z } from "zod/v4";
/**
 * Full read/storage source type for field-level provenance rows. Write query parameters use DatasourceWritableDataSourceType.
 *
 * @openapiSchema DatasourceDataSourceType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @usedBySchema DatasourceProvenanceSourceSchema
 * @contractShape datasource.data-source-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export declare const DatasourceDataSourceTypeSchema: z.ZodEnum<{
    api: "api";
    aventureStaff: "aventureStaff";
    blogArticle: "blogArticle";
    firstPartyWebsite: "firstPartyWebsite";
    import: "import";
    llm: "llm";
    manual: "manual";
    newsArticle: "newsArticle";
    relatedPartyWebsite: "relatedPartyWebsite";
    requestChangeForm: "requestChangeForm";
    thirdPartyWebsite: "thirdPartyWebsite";
}>;
export type DatasourceDataSourceType = z.infer<typeof DatasourceDataSourceTypeSchema>;
//# sourceMappingURL=data-source-type.d.ts.map