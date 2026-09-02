import { z } from "zod/v4";
/**
 * @openapiSchema SourceDocumentCaptureExtraction
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-extraction
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureExtractionSchema: z.ZodObject<{
    extractionMethod: z.ZodEnum<{
        dom: "dom";
        nativeShare: "nativeShare";
        readability: "readability";
        supplied: "supplied";
    }>;
    extractorVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SourceDocumentCaptureExtraction = z.infer<typeof SourceDocumentCaptureExtractionSchema>;
//# sourceMappingURL=document-capture-extraction.d.ts.map