import { z } from "zod/v4";
declare const ContentTaxonomyCountSchemaDefinition: z.ZodObject<{
    articleCount: z.ZodNumber;
    latestArticleUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    slug: z.ZodString;
}, z.core.$strip>;
type ContentTaxonomyCountDefinition = z.infer<typeof ContentTaxonomyCountSchemaDefinition>;
/**
 * Aggregated count for content taxonomy listings
 *
 * @openapiSchema ContentTaxonomyCount
 * @endpoint GET /v1/app/blog/categories
 * @endpoint GET /v1/app/blog/tags
 * @endpoint GET /v1/app/pages/categories
 * @endpoint GET /v1/app/pages/tags
 * @usedBySchema PageContentTaxonomyCountSchema
 * @contractShape content.taxonomy-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/TaxonomyCount.kt
 */
export declare const ContentTaxonomyCountSchema: z.ZodType<ContentTaxonomyCountDefinition>;
export type ContentTaxonomyCount = z.infer<typeof ContentTaxonomyCountSchema>;
export {};
//# sourceMappingURL=taxonomy-count.d.ts.map