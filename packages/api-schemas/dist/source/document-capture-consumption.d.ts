import { z } from "zod/v4";
/**
 * Permitted downstream consumption of one accepted client-capture part
 *
 * @openapiSchema SourceDocumentCaptureConsumption
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentCapturePartSchema
 * @contractShape source.document-capture-consumption
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureConsumptionSchema: z.ZodEnum<{
    stored: "stored";
    storedNotConsumed: "storedNotConsumed";
    text: "text";
    vision: "vision";
}>;
export type SourceDocumentCaptureConsumption = z.infer<typeof SourceDocumentCaptureConsumptionSchema>;
//# sourceMappingURL=document-capture-consumption.d.ts.map