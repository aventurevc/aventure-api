import { z } from "zod/v4";
/**
 * Typed, non-sensitive reason a client-capture part was omitted
 *
 * @openapiSchema SourceDocumentCaptureOmissionReason
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentCaptureOmissionSchema
 * @contractShape source.document-capture-omission-reason
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureOmissionReasonSchema: z.ZodEnum<{
    captureFailed: "captureFailed";
    countLimited: "countLimited";
    platformUnavailable: "platformUnavailable";
    redacted: "redacted";
    removed: "removed";
    sizeLimited: "sizeLimited";
    unsupported: "unsupported";
}>;
export type SourceDocumentCaptureOmissionReason = z.infer<typeof SourceDocumentCaptureOmissionReasonSchema>;
//# sourceMappingURL=document-capture-omission-reason.d.ts.map