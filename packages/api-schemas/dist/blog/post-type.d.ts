import { z } from "zod/v4";
/**
 * External research-side blog-post source classification
 *
 * @openapiSchema BlogPostType
 * @endpoint GET /v1/research/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts
 * @endpoint GET /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{personId}/blog-posts
 * @endpoint GET /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint GET /v1/people/{slug}/blog-posts
 * @endpoint POST /v1/entities/{entityId}/blog-posts
 * @endpoint POST /v1/people/{personId}/blog-posts
 * @endpoint PATCH /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PATCH /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint PUT /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/people/{personId}/blog-posts/{blogPostId}
 * @usedBySchema BlogPostMutationSchema
 * @usedBySchema BlogPostSchema
 * @contractShape blog.post-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPost.kt
 */
export declare const BlogPostTypeSchema: z.ZodEnum<{
    aventureBlog: "aventureBlog";
    employerBlog: "employerBlog";
    linkedin: "linkedin";
    medium: "medium";
    other: "other";
    personalBlog: "personalBlog";
    substack: "substack";
    xTwitter: "xTwitter";
}>;
export type BlogPostType = z.infer<typeof BlogPostTypeSchema>;
//# sourceMappingURL=post-type.d.ts.map