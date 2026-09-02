import { z } from "zod/v4";
declare const SourceDocumentCaptureOmissionSchemaDefinition: z.ZodObject<{
    omittedCount: z.ZodInt;
    partRole: z.ZodEnum<{
        inlineImage: "inlineImage";
        readableHtml: "readableHtml";
        readableText: "readableText";
        suppliedFile: "suppliedFile";
        suppliedImage: "suppliedImage";
        suppliedPdf: "suppliedPdf";
        suppliedText: "suppliedText";
        viewportScreenshot: "viewportScreenshot";
    }>;
    reason: z.ZodEnum<{
        captureFailed: "captureFailed";
        countLimited: "countLimited";
        platformUnavailable: "platformUnavailable";
        redacted: "redacted";
        removed: "removed";
        sizeLimited: "sizeLimited";
        unsupported: "unsupported";
    }>;
}, z.core.$strip>;
type SourceDocumentCaptureOmissionDefinition = z.infer<typeof SourceDocumentCaptureOmissionSchemaDefinition>;
/**
 * @openapiSchema SourceDocumentCaptureOmission
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-omission
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureOmissionSchema: z.ZodType<SourceDocumentCaptureOmissionDefinition>;
export type SourceDocumentCaptureOmission = z.infer<typeof SourceDocumentCaptureOmissionSchema>;
export {};
//# sourceMappingURL=document-capture-omission.d.ts.map