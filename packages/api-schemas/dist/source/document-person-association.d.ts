import { z } from "zod/v4";
declare const SourceDocumentPersonAssociationSchemaDefinition: z.ZodObject<{
    matchType: z.ZodEnum<{
        author: "author";
        mention: "mention";
        owner: "owner";
        subject: "subject";
    }>;
    personId: z.ZodUUID;
}, z.core.$strip>;
type SourceDocumentPersonAssociationDefinition = z.infer<typeof SourceDocumentPersonAssociationSchemaDefinition>;
/**
 * Role-tagged document-to-person association
 *
 * @openapiSchema SourceDocumentPersonAssociation
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentMutationSchema
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-person-association
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentPersonAssociationSchema: z.ZodType<SourceDocumentPersonAssociationDefinition>;
export type SourceDocumentPersonAssociation = z.infer<typeof SourceDocumentPersonAssociationSchema>;
export {};
//# sourceMappingURL=document-person-association.d.ts.map