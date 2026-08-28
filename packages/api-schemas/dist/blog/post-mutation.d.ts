import { z } from "zod/v4";
declare const BlogPostMutationSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mentionedEntityId: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    mentionedPersonId: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summaryGeneratedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    topic: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        aventureBlog: "aventureBlog";
        employerBlog: "employerBlog";
        linkedin: "linkedin";
        medium: "medium";
        other: "other";
        personalBlog: "personalBlog";
        substack: "substack";
        xTwitter: "xTwitter";
    }>>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type BlogPostMutationDefinition = z.infer<typeof BlogPostMutationSchemaDefinition>;
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
export declare const BlogPostMutationSchema: z.ZodType<BlogPostMutationDefinition>;
export type BlogPostMutation = z.infer<typeof BlogPostMutationSchema>;
export {};
//# sourceMappingURL=post-mutation.d.ts.map