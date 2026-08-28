import { z } from "zod/v4";
declare const MediaImportResultSchemaDefinition: z.ZodObject<{
    candidateCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    confidence: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    media: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        cdnUrl: z.ZodString;
        firstUploadedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        mediaType: z.ZodEnum<{
            BLOG: "BLOG";
            ENTITY: "ENTITY";
            NEWS: "NEWS";
            PERSON: "PERSON";
        }>;
        path: z.ZodString;
        provenance: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        targetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    sourceImageUrl: z.ZodString;
    winningSignal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type MediaImportResultDefinition = z.infer<typeof MediaImportResultSchemaDefinition>;
/**
 * Automatic media discovery result. Preview returns the selected external source image URL; import returns the attached managed media asset as well.
 *
 * @openapiSchema MediaImportResult
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/news-thumbnail/import
 * @contractShape media.import-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaImportResult.kt
 */
export declare const MediaImportResultSchema: z.ZodType<MediaImportResultDefinition>;
export type MediaImportResult = z.infer<typeof MediaImportResultSchema>;
export {};
//# sourceMappingURL=import-result.d.ts.map