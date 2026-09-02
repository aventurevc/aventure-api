// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentAuthorSchema } from "../content/author.js";
import { ContentTaxonomySchema } from "../content/taxonomy.js";
import { MediaHeroImageSchema } from "../media/hero-image.js";
const AventureBlogArticleListSchemaDefinition = z.object({
    author: ContentAuthorSchema.nullish(),
    category: z.array(ContentTaxonomySchema),
    excerpt: z.string(),
    /** Type-safe numeric identifier for first-party app blog articles */
    id: z.int(),
    image: MediaHeroImageSchema.nullish(),
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    readingTime: z.int(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    status: z.string(),
    tag: z.array(ContentTaxonomySchema),
    title: z.string(),
    updatedAt: z.iso.datetime({ offset: true }),
    viewCount: z.int(),
    wordCount: z.int(),
});
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
export const AventureBlogArticleListSchema = AventureBlogArticleListSchemaDefinition;
//# sourceMappingURL=blog-article-list.js.map