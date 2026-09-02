import { z } from "zod/v4";
/**
 * active = serving; deletePending = hidden awaiting workers; objectDeleted = R2 object removed
 *
 * @openapiSchema SourceDocumentDeletionState
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-deletion-state
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentDeletionStateSchema: z.ZodEnum<{
    active: "active";
    deletePending: "deletePending";
    objectDeleted: "objectDeleted";
}>;
export type SourceDocumentDeletionState = z.infer<typeof SourceDocumentDeletionStateSchema>;
//# sourceMappingURL=document-deletion-state.d.ts.map