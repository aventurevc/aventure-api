import { z } from "zod/v4";
/**
 * exactHttpBody = exact application-visible response-body bytes; legacyJsonbCanonical = UTF-8 bytes reconstructed from a migrated JSONB payload, never original provider bytes; client-captured-source = typed client capture metadata and accepted source parts
 *
 * @openapiSchema SourceDocumentCaptureType
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentSchema
 * @contractShape source.document-capture-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureTypeSchema: z.ZodEnum<{
    "client-captured-source": "client-captured-source";
    exactHttpBody: "exactHttpBody";
    legacyJsonbCanonical: "legacyJsonbCanonical";
}>;
export type SourceDocumentCaptureType = z.infer<typeof SourceDocumentCaptureTypeSchema>;
//# sourceMappingURL=document-capture-type.d.ts.map