// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Lifecycle of a generated social media post: pending until published, then posted, failed when publishing errored, or skipped when the post was intentionally not published.
 *
 * @openapiSchema SocialMediaPostStatus
 * @endpoint GET /v1/social/posts
 * @endpoint GET /v1/social/posts/{id}
 * @usedBySchema SocialMediaPostSchema
 * @contractShape social.media-post-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/social/SocialMediaPost.kt
 */
export const SocialMediaPostStatusSchema = z.enum(["pending", "posted", "failed", "skipped"]);
//# sourceMappingURL=media-post-status.js.map