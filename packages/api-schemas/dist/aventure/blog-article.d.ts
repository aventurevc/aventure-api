import { z } from "zod/v4";
declare const AventureBlogArticleSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodUUID;
        name: z.ZodString;
        slug: z.ZodString;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    category: z.ZodArray<z.ZodType<{
        name: string;
        slug: string;
    }, unknown, z.core.$ZodTypeInternals<{
        name: string;
        slug: string;
    }, unknown>>>;
    content: z.ZodString;
    createdAt: z.ZodISODateTime;
    excerpt: z.ZodString;
    id: z.ZodInt;
    image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        alt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodString;
    }, z.core.$strip>>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    readingTime: z.ZodInt;
    slug: z.ZodString;
    status: z.ZodString;
    tag: z.ZodArray<z.ZodType<{
        name: string;
        slug: string;
    }, unknown, z.core.$ZodTypeInternals<{
        name: string;
        slug: string;
    }, unknown>>>;
    title: z.ZodString;
    updatedAt: z.ZodISODateTime;
    viewCount: z.ZodInt;
    wordCount: z.ZodInt;
}, z.core.$strip>;
type AventureBlogArticleDefinition = z.infer<typeof AventureBlogArticleSchemaDefinition>;
/**
 * Detail projection for blog articles
 *
 * @openapiSchema AventureBlogArticle
 * @endpoint GET /v1/app/blog/articles/{slug}
 * @endpoint POST /v1/app/blog/articles
 * @endpoint POST /v1/app/blog/articles/{id}/publish
 * @endpoint PATCH /v1/app/blog/articles/{id}/status
 * @endpoint PUT /v1/app/blog/articles/{id}
 * @endpoint PUT /v1/app/blog/articles/by-slug/{slug}
 * @endpoint DELETE /v1/app/blog/articles/{id}
 * @endpoint DELETE /v1/app/blog/articles/by-slug/{slug}
 * @contractShape aventure.blog-article
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blog/AventureBlogArticle.kt
 */
export declare const AventureBlogArticleSchema: z.ZodType<AventureBlogArticleDefinition>;
export type AventureBlogArticle = z.infer<typeof AventureBlogArticleSchema>;
export {};
//# sourceMappingURL=blog-article.d.ts.map