import { z } from "zod/v4";
/**
 * Write provenance supplied on mutation query parameters.
 *
 * @openapiSchema DatasourceProvenanceSource
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
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @usedBySchema EntityResearchSourceSchema
 * @contractShape datasource.provenance-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/ProvenanceSource.kt
 */
export declare const DatasourceProvenanceSourceSchema: z.ZodObject<{
    actorType: z.ZodOptional<z.ZodEnum<{
        agent: "agent";
        employee: "employee";
    }>>;
    agentChassis: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceDetail: z.ZodString;
    sourceProvider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceProviderSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceType: z.ZodEnum<{
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
}, z.core.$strip>;
export type DatasourceProvenanceSource = z.infer<typeof DatasourceProvenanceSourceSchema>;
//# sourceMappingURL=provenance-source.d.ts.map