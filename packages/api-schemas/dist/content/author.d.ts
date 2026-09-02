import { z } from "zod/v4";
/**
 * Embedded author projection for content types
 *
 * @openapiSchema ContentAuthor
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
 * @contractShape content.author
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/Author.kt
 */
export declare const ContentAuthorSchema: z.ZodObject<{
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    name: z.ZodString;
    slug: z.ZodString;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type ContentAuthor = z.infer<typeof ContentAuthorSchema>;
//# sourceMappingURL=author.d.ts.map