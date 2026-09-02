// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ExternalSocialPostPlatformSchema } from "./social-post-platform.js";
const ExternalSocialPostPermalinkSchemaDefinition = z.object({
    /** The platform's own identifier for this post, parsed from the URL when it exposes one. */
    externalPostId: z.string().nullish(),
    platform: ExternalSocialPostPlatformSchema,
    /** Absolute URL of the post on its platform. */
    url: z.string(),
});
/**
 * Canonical URL, platform, and provider identifier for an external social post.
 *
 * @openapiSchema ExternalSocialPostPermalink
 * @endpoint GET /v1/research/external-social-posts
 * @endpoint GET /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint POST /v1/research/external-social-posts
 * @endpoint POST /v1/research/external-social-posts/scrape/{snapshotId}
 * @endpoint PATCH /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint PUT /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint DELETE /v1/research/external-social-posts/{externalSocialPostId}
 * @usedBySchema ExternalSocialPostSchema
 * @contractShape external.social-post-permalink
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export const ExternalSocialPostPermalinkSchema = ExternalSocialPostPermalinkSchemaDefinition;
//# sourceMappingURL=social-post-permalink.js.map