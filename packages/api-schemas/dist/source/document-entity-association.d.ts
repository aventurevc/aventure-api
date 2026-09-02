import { z } from "zod/v4";
declare const SourceDocumentEntityAssociationSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    matchType: z.ZodEnum<{
        author: "author";
        mention: "mention";
        owner: "owner";
        subject: "subject";
    }>;
}, z.core.$strip>;
type SourceDocumentEntityAssociationDefinition = z.infer<typeof SourceDocumentEntityAssociationSchemaDefinition>;
/**
 * Role-tagged document-to-entity association
 *
 * @openapiSchema SourceDocumentEntityAssociation
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentMutationSchema
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-entity-association
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentEntityAssociationSchema: z.ZodType<SourceDocumentEntityAssociationDefinition>;
export type SourceDocumentEntityAssociation = z.infer<typeof SourceDocumentEntityAssociationSchema>;
export {};
//# sourceMappingURL=document-entity-association.d.ts.map