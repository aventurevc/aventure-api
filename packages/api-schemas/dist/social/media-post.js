// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SocialEventTypeSchema } from "./event-type.js";
import { SocialMediaPostStatusSchema } from "./media-post-status.js";
const SocialMediaPostSchemaDefinition = z.object({
    /** Number of publish attempts */
    attemptCount: z.int(),
    /** Row creation time */
    createdAt: z.iso.datetime({ offset: true }),
    /** Research event type that produced this post */
    eventType: SocialEventTypeSchema,
    /** Representative provider post id */
    externalPostId: z.string().nullish(),
    /** Social media post id */
    id: z.number().int(),
    /** Last composition or provider error */
    lastError: z.string().nullish(),
    /** Time the provider accepted the post */
    postedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Terminal reason this post was skipped */
    skipReason: z.string().nullish(),
    /** Source row id within the event type */
    sourceId: z.string(),
    /** Current social media post lifecycle status */
    status: SocialMediaPostStatusSchema,
    /** Row last updated time */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * App-owned generated social media post
 *
 * @openapiSchema SocialMediaPost
 * @endpoint GET /v1/social/posts
 * @endpoint GET /v1/social/posts/{id}
 * @usedBySchema PageSocialMediaPostSchema
 * @contractShape social.media-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/social/SocialMediaPost.kt
 */
export const SocialMediaPostSchema = SocialMediaPostSchemaDefinition;
//# sourceMappingURL=media-post.js.map