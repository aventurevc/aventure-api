import { z } from "zod/v4";
/**
 * Derived character/word counts and whether the row text meets its governed type contract (word/character limits and paragraph shape). violation lists each unmet rule and is empty when the row is compliant.
 *
 * @openapiSchema ContentCompliance
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint GET /v1/entities/{entityId}/texts
 * @endpoint GET /v1/entities/{entityId}/texts/{textId}
 * @endpoint GET /v1/people/{personId}/texts
 * @endpoint GET /v1/people/{personId}/texts/{textId}
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint POST /v1/entities/{entityId}/texts
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/{personId}/texts
 * @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/texts/{textId}
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint PUT /v1/entities/{entityId}/texts/{textId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/{personId}/texts/{textId}
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint DELETE /v1/entities/{entityId}/texts/{textId}
 * @endpoint DELETE /v1/people/{personId}/texts/{textId}
 * @usedBySchema EntityResearchSnippetSchema
 * @usedBySchema EntityTextSchema
 * @contractShape content.compliance
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/ContentCompliance.kt
 */
export declare const ContentComplianceSchema: z.ZodObject<{
    characterCount: z.ZodInt;
    meetsRequirements: z.ZodBoolean;
    violation: z.ZodArray<z.ZodString>;
    wordCount: z.ZodInt;
}, z.core.$strip>;
export type ContentCompliance = z.infer<typeof ContentComplianceSchema>;
//# sourceMappingURL=compliance.d.ts.map