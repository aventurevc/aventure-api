// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentMatchTypeSchema } from "./document-match-type.js";
const SourceDocumentPersonAssociationSchemaDefinition = z.object({
    matchType: SourceDocumentMatchTypeSchema,
    /** Canonical person UUID */
    personId: z.uuid(),
});
/**
 * Role-tagged document-to-person association
 *
 * @openapiSchema SourceDocumentPersonAssociation
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentMutationSchema
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-person-association
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export const SourceDocumentPersonAssociationSchema = SourceDocumentPersonAssociationSchemaDefinition;
//# sourceMappingURL=document-person-association.js.map