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
export declare const SourceDocumentCapturePartRoleSchema: z.ZodEnum<{
    inlineImage: "inlineImage";
    readableHtml: "readableHtml";
    readableText: "readableText";
    suppliedFile: "suppliedFile";
    suppliedImage: "suppliedImage";
    suppliedPdf: "suppliedPdf";
    suppliedText: "suppliedText";
    viewportScreenshot: "viewportScreenshot";
}>;
export type SourceDocumentCapturePartRole = z.infer<typeof SourceDocumentCapturePartRoleSchema>;
//# sourceMappingURL=document-capture-part-role.d.ts.map