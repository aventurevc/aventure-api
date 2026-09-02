import { z } from "zod/v4";
declare const AventureBlogArticleListSchemaDefinition: z.ZodObject<{
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
type AventureBlogArticleListDefinition = z.infer<typeof AventureBlogArticleListSchemaDefinition>;
/**
 * List projection for blog articles
 *
 * @openapiSchema AventureBlogArticleList
 * @endpoint GET /v1/app/blog/articles
 * @endpoint GET /v1/app/blog/articles/featured
 * @usedBySchema PageAventureBlogArticleListSchema
 * @contractShape aventure.blog-article-list
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blog/AventureBlogArticleList.kt
 */
export declare const AventureBlogArticleListSchema: z.ZodType<AventureBlogArticleListDefinition>;
export type AventureBlogArticleList = z.infer<typeof AventureBlogArticleListSchema>;
export {};
//# sourceMappingURL=blog-article-list.d.ts.map