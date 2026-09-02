// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * owner = the document is about this entity/person; mention = referenced in the content; author = authored the content; subject = the focal subject of an observation
 *
 * @openapiSchema SourceDocumentMatchType
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentEntityAssociationSchema
 * @usedBySchema SourceDocumentPersonAssociationSchema
 * @contractShape source.document-match-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export const SourceDocumentMatchTypeSchema = z.enum(["owner", "mention", "author", "subject"]);
//# sourceMappingURL=document-match-type.js.map