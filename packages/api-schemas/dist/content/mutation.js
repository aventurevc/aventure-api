// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentStatusSchema } from "./status.js";
const ContentMutationSchemaDefinition = z.object({
    /** Category filter values */
    category: z.array(z.string()).optional(),
    content: z.string(),
    excerpt: z.string(),
    imageAlt: z.string().nullish(),
    imageUrl: z.string().nullish(),
    /** Preferred update-only slug rename field; omit on create. */
    newSlug: z.string().nullish(),
    /** Canonical person UUID */
    personId: z.uuid().nullish(),
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** URL slug. Required on CREATE and used as the current baseline on UPDATE. */
    slug: z.string(),
    status: ContentStatusSchema,
    /** Tag filter values */
    tag: z.array(z.string()).optional(),
    title: z.string(),
});
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
export const ContentMutationSchema = ContentMutationSchemaDefinition;
//# sourceMappingURL=mutation.js.map