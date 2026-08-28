// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * External research-side blog-post source classification
 *
 * @openapiSchema BlogPostType
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
export const BlogPostTypeSchema = z.enum([
    "aventureBlog",
    "personalBlog",
    "employerBlog",
    "linkedin",
    "xTwitter",
    "medium",
    "substack",
    "other",
]);
//# sourceMappingURL=post-type.js.map