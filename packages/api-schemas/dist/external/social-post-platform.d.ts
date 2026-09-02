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
export declare const ExternalSocialPostPlatformSchema: z.ZodEnum<{
    facebook: "facebook";
    instagram: "instagram";
    linkedin: "linkedin";
    other: "other";
    threads: "threads";
    tiktok: "tiktok";
    xTwitter: "xTwitter";
}>;
export type ExternalSocialPostPlatform = z.infer<typeof ExternalSocialPostPlatformSchema>;
//# sourceMappingURL=social-post-platform.d.ts.map