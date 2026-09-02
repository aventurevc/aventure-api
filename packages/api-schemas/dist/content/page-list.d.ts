import { z } from "zod/v4";
declare const ContentPageListSchemaDefinition: z.ZodObject<{
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
type ContentPageListDefinition = z.infer<typeof ContentPageListSchemaDefinition>;
/**
 * List projection for generic content pages
 *
 * @openapiSchema ContentPageList
 * @endpoint GET /v1/app/pages
 * @endpoint GET /v1/app/pages/featured
 * @usedBySchema PageContentPageListSchema
 * @contractShape content.page-list
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/page/ContentPageList.kt
 */
export declare const ContentPageListSchema: z.ZodType<ContentPageListDefinition>;
export type ContentPageList = z.infer<typeof ContentPageListSchema>;
export {};
//# sourceMappingURL=page-list.d.ts.map