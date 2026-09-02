import { z } from "zod/v4";
declare const SourceDocumentMutationSchemaDefinition: z.ZodObject<{
    documentType: z.ZodNullable<z.ZodString>;
    entityAssociation: z.ZodOptional<z.ZodArray<z.ZodType<{
        entityId: string;
        matchType: "author" | "mention" | "owner" | "subject";
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        matchType: "author" | "mention" | "owner" | "subject";
    }, unknown>>>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    httpStatus: z.ZodNullable<z.ZodInt>;
    personAssociation: z.ZodOptional<z.ZodArray<z.ZodType<{
        matchType: "author" | "mention" | "owner" | "subject";
        personId: string;
    }, unknown, z.core.$ZodTypeInternals<{
        matchType: "author" | "mention" | "owner" | "subject";
        personId: string;
    }, unknown>>>>;
    provider: z.ZodNullable<z.ZodString>;
    providerRequestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawBody: z.ZodNullable<z.ZodString>;
    rawCharset: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawMediaType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceKey: z.ZodNullable<z.ZodString>;
    sourceRunId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    upstreamContentEncoding: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SourceDocumentMutationDefinition = z.infer<typeof SourceDocumentMutationSchemaDefinition>;
/**
 * Flat source-document write shape
 *
 * @openapiSchema SourceDocumentMutation
 * @endpoint POST /v1/research/source-documents
 * @contractShape source.document-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocument.kt
 */
export declare const SourceDocumentMutationSchema: z.ZodType<SourceDocumentMutationDefinition>;
export type SourceDocumentMutation = z.infer<typeof SourceDocumentMutationSchema>;
export {};
//# sourceMappingURL=document-mutation.d.ts.map