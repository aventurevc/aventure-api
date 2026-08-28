import { z } from "zod/v4";
/**
 * Managed media asset reference with resolved CDN URL and target metadata
 *
 * @openapiSchema MediaUpload
 * @endpoint GET /v1/media
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/news-thumbnail/import
 * @endpoint POST /v1/media/upload
 * @usedBySchema EntityCreateLogoSchema
 * @usedBySchema MediaImportResultSchema
 * @contractShape media.upload
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaUpload.kt
 */
export declare const MediaUploadSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type MediaUpload = z.infer<typeof MediaUploadSchema>;
//# sourceMappingURL=upload.d.ts.map