// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentCaptureConsumptionSchema } from "./document-capture-consumption.js";
import { SourceDocumentCaptureMethodSchema } from "./document-capture-method.js";
import { SourceDocumentCapturePartRoleSchema } from "./document-capture-part-role.js";
import { SourceDocumentCaptureScopeSchema } from "./document-capture-scope.js";
const SourceDocumentCapturePartSchemaDefinition = z.object({
    /** Positive accepted-part payload size in bytes. */
    byteCount: z.number().int(),
    /** UTC timestamp when this part was captured. */
    capturedAt: z.iso.datetime({ offset: true }).nullish(),
    captureMethod: SourceDocumentCaptureMethodSchema.nullish(),
    captureScope: SourceDocumentCaptureScopeSchema.nullish(),
    consumption: SourceDocumentCaptureConsumptionSchema,
    /** Media type of the accepted part payload. */
    mediaType: z.string(),
    /** Zero-based contiguous part ordinal. */
    ordinal: z.int(),
    /** Image height in pixels; provide with pixelWidth. */
    pixelHeight: z.int().nullish(),
    /** Image width in pixels; provide with pixelHeight. */
    pixelWidth: z.int().nullish(),
    role: SourceDocumentCapturePartRoleSchema,
    /** Payload SHA-256 as 64 lowercase hexadecimal characters. */
    sha256: z.string(),
});
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
export const SourceDocumentCapturePartSchema = SourceDocumentCapturePartSchemaDefinition;
//# sourceMappingURL=document-capture-part.js.map