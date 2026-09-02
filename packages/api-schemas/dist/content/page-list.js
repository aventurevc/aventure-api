// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentAuthorSchema } from "./author.js";
import { ContentTaxonomySchema } from "./taxonomy.js";
import { MediaHeroImageSchema } from "../media/hero-image.js";
const ContentPageListSchemaDefinition = z.object({
    author: ContentAuthorSchema.nullish(),
    category: z.array(ContentTaxonomySchema),
    excerpt: z.string(),
    /** Type-safe identifier for pages */
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
export const ContentPageListSchema = ContentPageListSchemaDefinition;
//# sourceMappingURL=page-list.js.map