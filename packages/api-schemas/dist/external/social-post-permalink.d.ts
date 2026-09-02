import { z } from "zod/v4";
declare const ExternalSocialPostPermalinkSchemaDefinition: z.ZodObject<{
    externalPostId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    platform: z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        linkedin: "linkedin";
        other: "other";
        threads: "threads";
        tiktok: "tiktok";
        xTwitter: "xTwitter";
    }>;
    url: z.ZodString;
}, z.core.$strip>;
type ExternalSocialPostPermalinkDefinition = z.infer<typeof ExternalSocialPostPermalinkSchemaDefinition>;
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
export declare const ExternalSocialPostPermalinkSchema: z.ZodType<ExternalSocialPostPermalinkDefinition>;
export type ExternalSocialPostPermalink = z.infer<typeof ExternalSocialPostPermalinkSchema>;
export {};
//# sourceMappingURL=social-post-permalink.d.ts.map