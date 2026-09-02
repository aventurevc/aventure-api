// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentAuthorSchema } from "./author.js";
import { ContentTaxonomySchema } from "./taxonomy.js";
import { MediaHeroImageSchema } from "../media/hero-image.js";
const ContentPageSchemaDefinition = z.object({
    author: ContentAuthorSchema.nullish(),
    category: z.array(ContentTaxonomySchema),
    content: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
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
export const ContentPageSchema = ContentPageSchemaDefinition;
//# sourceMappingURL=page.js.map