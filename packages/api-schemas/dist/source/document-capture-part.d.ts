import { z } from "zod/v4";
declare const SourceDocumentCapturePartSchemaDefinition: z.ZodObject<{
    byteCount: z.ZodNumber;
    capturedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    captureMethod: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        browserExtension: "browserExtension";
        manualUpload: "manualUpload";
        shareSheet: "shareSheet";
        tabsCaptureVisibleTab: "tabsCaptureVisibleTab";
    }>>>;
    captureScope: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        page: "page";
        selection: "selection";
        supplied: "supplied";
        viewport: "viewport";
    }>>>;
    consumption: z.ZodEnum<{
        stored: "stored";
        storedNotConsumed: "storedNotConsumed";
        text: "text";
        vision: "vision";
    }>;
    mediaType: z.ZodString;
    ordinal: z.ZodInt;
    pixelHeight: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    pixelWidth: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    role: z.ZodEnum<{
        inlineImage: "inlineImage";
        readableHtml: "readableHtml";
        readableText: "readableText";
        suppliedFile: "suppliedFile";
        suppliedImage: "suppliedImage";
        suppliedPdf: "suppliedPdf";
        suppliedText: "suppliedText";
        viewportScreenshot: "viewportScreenshot";
    }>;
    sha256: z.ZodString;
}, z.core.$strip>;
type SourceDocumentCapturePartDefinition = z.infer<typeof SourceDocumentCapturePartSchemaDefinition>;
/**
 * @openapiSchema SourceDocumentCapturePart
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-part
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCapturePartSchema: z.ZodType<SourceDocumentCapturePartDefinition>;
export type SourceDocumentCapturePart = z.infer<typeof SourceDocumentCapturePartSchema>;
export {};
//# sourceMappingURL=document-capture-part.d.ts.map