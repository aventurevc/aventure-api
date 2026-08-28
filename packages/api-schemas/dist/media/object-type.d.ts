import { z } from "zod/v4";
/**
 * Target domain for media operations (logos, pictures, thumbnails)
 *
 * @openapiSchema MediaObjectType
 * @endpoint GET /v1/media
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/logo-accuracy
 * @endpoint POST /v1/media/logo-audit/jobs
 * @endpoint POST /v1/media/news-thumbnail/import
 * @endpoint POST /v1/media/retrofit/jobs
 * @endpoint POST /v1/media/upload
 * @endpoint DELETE /v1/media/delete
 * @usedBySchema MediaUploadSchema
 * @contractShape media.object-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaObjectType.kt
 */
export declare const MediaObjectTypeSchema: z.ZodEnum<{
    BLOG: "BLOG";
    ENTITY: "ENTITY";
    NEWS: "NEWS";
    PERSON: "PERSON";
}>;
export type MediaObjectType = z.infer<typeof MediaObjectTypeSchema>;
//# sourceMappingURL=object-type.d.ts.map