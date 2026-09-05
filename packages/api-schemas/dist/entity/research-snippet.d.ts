import { z } from "zod/v4";
/**
 * Persisted research snippet row for one entity.
 *
 * @openapiSchema EntityResearchSnippet
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchSnippetSchema
 * @contractShape entity.research-snippet
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchSnippet.kt
 */
export declare const EntityResearchSnippetSchema: z.ZodObject<{
    compliance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        characterCount: z.ZodInt;
        meetsRequirements: z.ZodBoolean;
        violation: z.ZodArray<z.ZodString>;
        wordCount: z.ZodInt;
    }, z.core.$strip>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entityId: z.ZodUUID;
    id: z.ZodInt;
    isCurrent: z.ZodBoolean;
    isPrimary: z.ZodBoolean;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceRecord: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        operation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            CREATE: "CREATE";
            DELETE: "DELETE";
            UPDATE: "UPDATE";
        }>>>;
        provenanceSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        }, z.core.$strip>>>;
        source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    text: z.ZodString;
    textType: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    visible: z.ZodBoolean;
}, z.core.$strip>;
export type EntityResearchSnippet = z.infer<typeof EntityResearchSnippetSchema>;
//# sourceMappingURL=research-snippet.d.ts.map