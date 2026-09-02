// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SourceDocumentCaptureImageReferenceSchemaDefinition = z.object({
    /** Image alternative text reported by the client. */
    alt: z.string().nullish(),
    /** Image candidate descriptor reported by the client. */
    descriptor: z.string().nullish(),
    source: z.enum(["src", "srcset", "lazySrc", "lazySrcset"]).nullish(),
    /** Image reference URI. */
    url: z.string(),
});
/**
 * @openapiSchema SourceDocumentCaptureImageReference
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-image-reference
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export const SourceDocumentCaptureImageReferenceSchema = SourceDocumentCaptureImageReferenceSchemaDefinition;
//# sourceMappingURL=document-capture-image-reference.js.map