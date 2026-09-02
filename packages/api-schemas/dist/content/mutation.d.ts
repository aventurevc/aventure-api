import { z } from "zod/v4";
declare const ContentMutationSchemaDefinition: z.ZodObject<{
    category: z.ZodOptional<z.ZodArray<z.ZodString>>;
    content: z.ZodString;
    excerpt: z.ZodString;
    imageAlt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    slug: z.ZodString;
    status: z.ZodEnum<{
        draft: "draft";
        featured: "featured";
        published: "published";
    }>;
    tag: z.ZodOptional<z.ZodArray<z.ZodString>>;
    title: z.ZodString;
}, z.core.$strip>;
type ContentMutationDefinition = z.infer<typeof ContentMutationSchemaDefinition>;
/**
 * Shared mutation owner for blog/page create and update requests
 *
 * @openapiSchema ContentMutation
 * @endpoint POST /v1/app/blog/articles
 * @endpoint POST /v1/app/pages
 * @endpoint PUT /v1/app/blog/articles/{id}
 * @endpoint PUT /v1/app/blog/articles/by-slug/{slug}
 * @endpoint PUT /v1/app/pages/{id}
 * @endpoint PUT /v1/app/pages/by-slug/{slug}
 * @contractShape content.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentMutation.kt
 */
export declare const ContentMutationSchema: z.ZodType<ContentMutationDefinition>;
export type ContentMutation = z.infer<typeof ContentMutationSchema>;
export {};
//# sourceMappingURL=mutation.d.ts.map