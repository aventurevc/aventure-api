// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContentTaxonomyCountSchemaDefinition = z.object({
    articleCount: z.number().int(),
    latestArticleUpdatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
});
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
export const ContentTaxonomyCountSchema = ContentTaxonomyCountSchemaDefinition;
//# sourceMappingURL=taxonomy-count.js.map