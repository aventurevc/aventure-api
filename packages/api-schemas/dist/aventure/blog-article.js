// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentAuthorSchema } from "../content/author.js";
import { ContentTaxonomySchema } from "../content/taxonomy.js";
import { MediaHeroImageSchema } from "../media/hero-image.js";
const AventureBlogArticleSchemaDefinition = z.object({
    author: ContentAuthorSchema.nullish(),
    category: z.array(ContentTaxonomySchema),
    content: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
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
export const AventureBlogArticleSchema = AventureBlogArticleSchemaDefinition;
//# sourceMappingURL=blog-article.js.map