import { z } from "zod/v4";
declare const ContentPageSchemaDefinition: z.ZodObject<{
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
type ContentPageDefinition = z.infer<typeof ContentPageSchemaDefinition>;
/**
 * Canonical generic content page
 *
 * @openapiSchema ContentPage
 * @endpoint GET /v1/app/pages/{slug}
 * @endpoint POST /v1/app/pages
 * @endpoint POST /v1/app/pages/{id}/publish
 * @endpoint PATCH /v1/app/pages/{id}/status
 * @endpoint PUT /v1/app/pages/{id}
 * @endpoint PUT /v1/app/pages/by-slug/{slug}
 * @endpoint DELETE /v1/app/pages/{id}
 * @endpoint DELETE /v1/app/pages/by-slug/{slug}
 * @contractShape content.page
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/page/ContentPage.kt
 */
export declare const ContentPageSchema: z.ZodType<ContentPageDefinition>;
export type ContentPage = z.infer<typeof ContentPageSchema>;
export {};
//# sourceMappingURL=page.d.ts.map