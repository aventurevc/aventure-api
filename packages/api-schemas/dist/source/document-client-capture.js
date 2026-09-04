// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentCaptureDispatchIntentSchema } from "./document-capture-dispatch-intent.js";
import { SourceDocumentCaptureExtractionSchema } from "./document-capture-extraction.js";
import { SourceDocumentCaptureImageReferenceSchema } from "./document-capture-image-reference.js";
import { SourceDocumentCaptureMethodSchema } from "./document-capture-method.js";
import { SourceDocumentCaptureOmissionSchema } from "./document-capture-omission.js";
import { SourceDocumentCapturePartSchema } from "./document-capture-part.js";
import { SourceDocumentCaptureScopeSchema } from "./document-capture-scope.js";
import { SourceDocumentCaptureViewportSchema } from "./document-capture-viewport.js";
/**
 * @openapiSchema SourceDocumentClientCapture
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-client-capture
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export const SourceDocumentClientCaptureSchema = z.object({
    /** UTC timestamp when the client capture was created. */
    capturedAt: z.iso.datetime({ offset: true }),
    captureMethod: SourceDocumentCaptureMethodSchema,
    captureScope: SourceDocumentCaptureScopeSchema,
    dispatch: SourceDocumentCaptureDispatchIntentSchema,
    extraction: SourceDocumentCaptureExtractionSchema.nullish(),
    imageReference: z.array(SourceDocumentCaptureImageReferenceSchema),
    omission: z.array(SourceDocumentCaptureOmissionSchema),
    part: z.array(SourceDocumentCapturePartSchema).min(1).max(32),
    /** HTTP(S) URI rendered for the client capture. */
    renderedUrl: z.string().nullish(),
    /** HTTP(S) URI requested for the client capture. */
    requestedUrl: z.string().nullish(),
    viewport: SourceDocumentCaptureViewportSchema.nullish(),
});
//# sourceMappingURL=document-client-capture.js.map