// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @openapiSchema SourceDocumentCaptureViewport
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-viewport
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export const SourceDocumentCaptureViewportSchema = z.object({
    /** Positive viewport height in CSS pixels. */
    cssHeight: z.int(),
    /** Positive viewport width in CSS pixels. */
    cssWidth: z.int(),
    /** Positive physical-pixels-per-CSS-pixel ratio. */
    devicePixelRatio: z.number().nullish(),
    /** Horizontal scroll offset in CSS pixels. */
    scrollX: z.number().nullish(),
    /** Vertical scroll offset in CSS pixels. */
    scrollY: z.number().nullish(),
    /** Positive browser zoom factor. */
    zoom: z.number().nullish(),
});
//# sourceMappingURL=document-capture-viewport.js.map