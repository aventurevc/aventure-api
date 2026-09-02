// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SourceDocumentCaptureOmissionReasonSchema = z.enum([
    "removed",
    "platformUnavailable",
    "captureFailed",
    "countLimited",
    "sizeLimited",
    "unsupported",
    "redacted",
]);
//# sourceMappingURL=document-capture-omission-reason.js.map