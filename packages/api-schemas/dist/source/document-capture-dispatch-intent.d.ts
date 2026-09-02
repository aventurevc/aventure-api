import { z } from "zod/v4";
declare const SourceDocumentCaptureDispatchIntentSchemaDefinition: z.ZodObject<{
    maxIteration: z.ZodInt;
    maxScoutConcurrent: z.ZodInt;
    mode: z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subagentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SourceDocumentCaptureDispatchIntentDefinition = z.infer<typeof SourceDocumentCaptureDispatchIntentSchemaDefinition>;
/**
 * @openapiSchema SourceDocumentCaptureDispatchIntent
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-dispatch-intent
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export declare const SourceDocumentCaptureDispatchIntentSchema: z.ZodType<SourceDocumentCaptureDispatchIntentDefinition>;
export type SourceDocumentCaptureDispatchIntent = z.infer<typeof SourceDocumentCaptureDispatchIntentSchema>;
export {};
//# sourceMappingURL=document-capture-dispatch-intent.d.ts.map