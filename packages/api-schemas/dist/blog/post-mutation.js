// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { BlogPostTypeSchema } from "./post-type.js";
const BlogPostMutationSchemaDefinition = z.object({
    /** Blog-post author when known. */
    author: z.string().nullish(),
    /** Stable external feed/item identifier when available. */
    externalId: z.string().nullish(),
    /** Lifecycle flag. Defaults true on create; update omits preserve existing. */
    isCurrent: z.boolean().nullish(),
    /** Last fetch instant recorded by ingest. */
    lastFetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Entities mentioned in the blog-post body; the owner is stripped on write. */
    mentionedEntityId: z.array(z.uuid()).nullish(),
    /** People mentioned in the blog-post body; the owner is stripped on write. */
    mentionedPersonId: z.array(z.uuid()).nullish(),
    /** Blog-post publish instant when known. */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** LLM-generated blog-post summary. */
    summary: z.string().nullish(),
    /** Summary generation instant recorded by ingest. */
    summaryGeneratedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Blog-post title when known. */
    title: z.string().nullish(),
    /** Nullable topic key from app.contracts.web-crawl.section. */
    topic: z.string().nullish(),
    /** External blog-post classification token. Inferred from the URL host when omitted on create. */
    type: BlogPostTypeSchema.nullish(),
    /** Absolute external blog-post URL. */
    url: z.string().nullish(),
});
/**
 * External research-side blog post create/update mutation. Owner comes from the route; body carries url, type, title, publishedAt, isCurrent, summary, author, topic, externalId, lastFetchedAt, summaryGeneratedAt, and mentioned entity/person id lists.
 *
 * @openapiSchema BlogPostMutation
 * @endpoint POST /v1/entities/{entityId}/blog-posts
 * @endpoint POST /v1/people/{personId}/blog-posts
 * @endpoint PATCH /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PATCH /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/people/{personId}/blog-posts/{blogPostId}
 * @contractShape blog.post-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPostMutation.kt
 */
export const BlogPostMutationSchema = BlogPostMutationSchemaDefinition;
//# sourceMappingURL=post-mutation.js.map