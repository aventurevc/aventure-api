import { z } from "zod/v4";
declare const SourceDocumentCaptureImageReferenceSchemaDefinition: z.ZodObject<{
    alt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    descriptor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        lazySrc: "lazySrc";
        lazySrcset: "lazySrcset";
        src: "src";
        srcset: "srcset";
    }>>>;
    url: z.ZodString;
}, z.core.$strip>;
type SourceDocumentCaptureImageReferenceDefinition = z.infer<typeof SourceDocumentCaptureImageReferenceSchemaDefinition>;
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
export declare const SourceDocumentCaptureImageReferenceSchema: z.ZodType<SourceDocumentCaptureImageReferenceDefinition>;
export type SourceDocumentCaptureImageReference = z.infer<typeof SourceDocumentCaptureImageReferenceSchema>;
export {};
//# sourceMappingURL=document-capture-image-reference.d.ts.map