// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SourceDocumentMatchTypeSchema } from "./document-match-type.js";
const SourceDocumentEntityAssociationSchemaDefinition = z.object({
    /** Canonical entity UUID */
    entityId: z.uuid(),
    matchType: SourceDocumentMatchTypeSchema,
});
/**
 * Role-tagged document-to-entity association
 *
 * @openapiSchema SourceDocumentEntityAssociation
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentMutationSchema
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-entity-association
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export const SourceDocumentEntityAssociationSchema = SourceDocumentEntityAssociationSchemaDefinition;
//# sourceMappingURL=document-entity-association.js.map