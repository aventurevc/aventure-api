import { z } from "zod/v4";
declare const SlugChangeResultSchemaDefinition: z.ZodObject<{
    newSlug: z.ZodString;
    newUrl: z.ZodString;
    oldSlug: z.ZodString;
    oldUrl: z.ZodString;
    redirect: z.ZodType<{
        createdAt: string;
        newUrl: string;
        oldUrl: string;
        redirectId: number;
        redirectType: number;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        newUrl: string;
        oldUrl: string;
        redirectId: number;
        redirectType: number;
        updatedAt: string;
    }, unknown>>;
    resourceType: z.ZodEnum<{
        blog: "blog";
        content: "content";
        entity: "entity";
        news: "news";
        person: "person";
    }>;
}, z.core.$strip>;
type SlugChangeResultDefinition = z.infer<typeof SlugChangeResultSchemaDefinition>;
/**
 * Completed slug change with created redirect
 *
 * @openapiSchema SlugChangeResult
 * @endpoint PATCH /v1/app/blog/articles/{id}/slug
 * @endpoint PATCH /v1/app/pages/{id}/slug
 * @endpoint PATCH /v1/entities/{entityId}/slug
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/people/{personId}/slug
 * @contractShape slug.change-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugChangeResult.kt
 */
export declare const SlugChangeResultSchema: z.ZodType<SlugChangeResultDefinition>;
export type SlugChangeResult = z.infer<typeof SlugChangeResultSchema>;
export {};
//# sourceMappingURL=change-result.d.ts.map