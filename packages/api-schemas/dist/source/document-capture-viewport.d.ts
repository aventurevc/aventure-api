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
export declare const SourceDocumentCaptureViewportSchema: z.ZodObject<{
    cssHeight: z.ZodInt;
    cssWidth: z.ZodInt;
    devicePixelRatio: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    scrollX: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    scrollY: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    zoom: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type SourceDocumentCaptureViewport = z.infer<typeof SourceDocumentCaptureViewportSchema>;
//# sourceMappingURL=document-capture-viewport.d.ts.map