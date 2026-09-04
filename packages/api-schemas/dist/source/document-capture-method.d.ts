import { z } from "zod/v4";
/**
 * Client mechanism that produced one source capture.
 *
 * @openapiSchema SourceDocumentCaptureMethod
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentCapturePartSchema
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-method
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureMethodSchema: z.ZodEnum<{
    browserExtension: "browserExtension";
    manualUpload: "manualUpload";
    shareSheet: "shareSheet";
    tabsCaptureVisibleTab: "tabsCaptureVisibleTab";
}>;
export type SourceDocumentCaptureMethod = z.infer<typeof SourceDocumentCaptureMethodSchema>;
//# sourceMappingURL=document-capture-method.d.ts.map