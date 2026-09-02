import { z } from "zod/v4";
/**
 * owner = the document is about this entity/person; mention = referenced in the content; author = authored the content; subject = the focal subject of an observation
 *
 * @openapiSchema SourceDocumentMatchType
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentEntityAssociationSchema
 * @usedBySchema SourceDocumentPersonAssociationSchema
 * @contractShape source.document-match-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentMatchTypeSchema: z.ZodEnum<{
    author: "author";
    mention: "mention";
    owner: "owner";
    subject: "subject";
}>;
export type SourceDocumentMatchType = z.infer<typeof SourceDocumentMatchTypeSchema>;
//# sourceMappingURL=document-match-type.d.ts.map