// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Role of one accepted client-capture part
 *
 * @openapiSchema SourceDocumentCapturePartRole
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentCaptureOmissionSchema
 * @usedBySchema SourceDocumentCapturePartSchema
 * @contractShape source.document-capture-part-role
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export const SourceDocumentCapturePartRoleSchema = z.enum([
    "readableText",
    "readableHtml",
    "viewportScreenshot",
    "inlineImage",
    "suppliedText",
    "suppliedImage",
    "suppliedPdf",
    "suppliedFile",
]);
//# sourceMappingURL=document-capture-part-role.js.map