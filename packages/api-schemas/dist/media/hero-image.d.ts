import { z } from "zod/v4";
/**
 * Hero image payload for content types (blog articles, pages)
 *
 * @openapiSchema MediaHeroImage
 * @endpoint GET /v1/app/blog/articles
 * @endpoint GET /v1/app/blog/articles/featured
 * @endpoint GET /v1/app/pages
 * @endpoint GET /v1/app/pages/featured
 * @endpoint GET /v1/app/blog/articles/{slug}
 * @endpoint GET /v1/app/pages/{slug}
 * @endpoint POST /v1/app/blog/articles
 * @endpoint POST /v1/app/blog/articles/{id}/publish
 * @endpoint POST /v1/app/pages
 * @endpoint POST /v1/app/pages/{id}/publish
 * @endpoint PATCH /v1/app/blog/articles/{id}/status
 * @endpoint PATCH /v1/app/pages/{id}/status
 * @endpoint PUT /v1/app/blog/articles/{id}
 * @endpoint PUT /v1/app/blog/articles/by-slug/{slug}
 * @endpoint PUT /v1/app/pages/{id}
 * @endpoint PUT /v1/app/pages/by-slug/{slug}
 * @endpoint DELETE /v1/app/blog/articles/{id}
 * @endpoint DELETE /v1/app/blog/articles/by-slug/{slug}
 * @endpoint DELETE /v1/app/pages/{id}
 * @endpoint DELETE /v1/app/pages/by-slug/{slug}
 * @usedBySchema AventureBlogArticleListSchema
 * @usedBySchema AventureBlogArticleSchema
 * @usedBySchema ContentPageListSchema
 * @usedBySchema ContentPageSchema
 * @contractShape media.hero-image
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/ImageModels.kt
 */
export declare const MediaHeroImageSchema: z.ZodObject<{
    alt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
}, z.core.$strip>;
export type MediaHeroImage = z.infer<typeof MediaHeroImageSchema>;
//# sourceMappingURL=hero-image.d.ts.map