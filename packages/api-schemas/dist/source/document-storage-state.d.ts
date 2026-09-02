import { z } from "zod/v4";
/**
 * inline = raw bytes live in the row; archivePending = inline bytes stay readable while the R2 transition retries; r2Ready = the R2 object is the raw authority
 *
 * @openapiSchema SourceDocumentStorageState
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-storage-state
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentStorageStateSchema: z.ZodEnum<{
    archivePending: "archivePending";
    inline: "inline";
    r2Ready: "r2Ready";
}>;
export type SourceDocumentStorageState = z.infer<typeof SourceDocumentStorageStateSchema>;
//# sourceMappingURL=document-storage-state.d.ts.map