// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Social platform that published an externally-authored post.
 *
 * @openapiSchema ExternalSocialPostPlatform
 * @endpoint GET /v1/entities/urls/surface-misclassifications
 * @endpoint GET /v1/research/external-social-posts
 * @endpoint GET /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint POST /v1/research/external-social-posts
 * @endpoint POST /v1/research/external-social-posts/scrape
 * @endpoint POST /v1/research/external-social-posts/scrape/{snapshotId}
 * @endpoint PATCH /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint PUT /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint DELETE /v1/research/external-social-posts/{externalSocialPostId}
 * @usedBySchema ExternalSocialPostMutationSchema
 * @usedBySchema ExternalSocialPostPermalinkSchema
 * @usedBySchema ExternalSocialPostScrapeResultSchema
 * @usedBySchema ExternalSocialPostScrapeTicketSchema
 * @usedBySchema UrlSurfaceMisclassificationRouteSchema
 * @contractShape external.social-post-platform
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export const ExternalSocialPostPlatformSchema = z.enum([
    "linkedin",
    "xTwitter",
    "facebook",
    "tiktok",
    "instagram",
    "threads",
    "other",
]);
//# sourceMappingURL=social-post-platform.js.map