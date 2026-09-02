import { z } from "zod/v4";
/**
 * Externally-authored social post with optional proven author and separate mentions. Unrelated to app.app_social_media_posts, the outbound generated-post ledger.
 *
 * @openapiSchema ExternalSocialPost
 * @endpoint GET /v1/research/external-social-posts
 * @endpoint GET /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint POST /v1/research/external-social-posts
 * @endpoint POST /v1/research/external-social-posts/scrape/{snapshotId}
 * @endpoint PATCH /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint PUT /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint DELETE /v1/research/external-social-posts/{externalSocialPostId}
 * @usedBySchema ExternalSocialPostScrapeResultSchema
 * @usedBySchema PageExternalSocialPostSchema
 * @contractShape external.social-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export declare const ExternalSocialPostSchema: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    id: z.ZodUUID;
    isCurrent: z.ZodBoolean;
    lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mentionedEntityId: z.ZodArray<z.ZodUUID>;
    mentionedPersonId: z.ZodArray<z.ZodUUID>;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    permalink: z.ZodType<{
        externalPostId?: string | null | undefined;
        platform: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter";
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        externalPostId?: string | null | undefined;
        platform: "facebook" | "instagram" | "linkedin" | "other" | "threads" | "tiktok" | "xTwitter";
        url: string;
    }, unknown>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summaryGeneratedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
export type ExternalSocialPost = z.infer<typeof ExternalSocialPostSchema>;
//# sourceMappingURL=social-post.d.ts.map