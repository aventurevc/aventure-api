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
export declare const SocialMediaPostStatusSchema: z.ZodEnum<{
    failed: "failed";
    pending: "pending";
    posted: "posted";
    skipped: "skipped";
}>;
export type SocialMediaPostStatus = z.infer<typeof SocialMediaPostStatusSchema>;
//# sourceMappingURL=media-post-status.d.ts.map