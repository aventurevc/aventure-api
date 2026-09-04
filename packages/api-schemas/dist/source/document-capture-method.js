// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SourceDocumentCaptureMethodSchema = z.enum([
    "browserExtension",
    "tabsCaptureVisibleTab",
    "shareSheet",
    "manualUpload",
]);
//# sourceMappingURL=document-capture-method.js.map