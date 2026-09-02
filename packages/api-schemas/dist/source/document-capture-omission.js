// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentCaptureOmissionReasonSchema } from "./document-capture-omission-reason.js";
import { SourceDocumentCapturePartRoleSchema } from "./document-capture-part-role.js";
const SourceDocumentCaptureOmissionSchemaDefinition = z.object({
    /** Positive count of omitted parts with this role and reason. */
    omittedCount: z.int(),
    partRole: SourceDocumentCapturePartRoleSchema,
    reason: SourceDocumentCaptureOmissionReasonSchema,
});
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
export const SourceDocumentCaptureOmissionSchema = SourceDocumentCaptureOmissionSchemaDefinition;
//# sourceMappingURL=document-capture-omission.js.map