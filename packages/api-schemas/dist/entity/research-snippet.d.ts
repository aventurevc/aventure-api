import { z } from "zod/v4";
declare const EntityResearchSnippetSchemaDefinition: z.ZodObject<{
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
    text: z.ZodString;
    textType: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    visible: z.ZodBoolean;
}, z.core.$strip>;
type EntityResearchSnippetDefinition = z.infer<typeof EntityResearchSnippetSchemaDefinition>;
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
export declare const EntityResearchSnippetSchema: z.ZodType<EntityResearchSnippetDefinition>;
export type EntityResearchSnippet = z.infer<typeof EntityResearchSnippetSchema>;
export {};
//# sourceMappingURL=research-snippet.d.ts.map