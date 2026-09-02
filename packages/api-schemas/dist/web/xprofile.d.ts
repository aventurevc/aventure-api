import { z } from "zod/v4";
declare const WebXProfileSchemaDefinition: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bannerUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    biography: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    businessAccount: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    externalLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fetchedAt: z.ZodISODateTime;
    followerCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    followingCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    governmentAccount: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    handle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    joinedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    post: z.ZodArray<z.ZodType<{
        description?: string | null | undefined;
        likeCount?: number | null | undefined;
        postedAt?: string | null | undefined;
        postId?: string | null | undefined;
        postUrl?: string | null | undefined;
        replyCount?: number | null | undefined;
        repostCount?: number | null | undefined;
        viewCount?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        description?: string | null | undefined;
        likeCount?: number | null | undefined;
        postedAt?: string | null | undefined;
        postId?: string | null | undefined;
        postUrl?: string | null | undefined;
        replyCount?: number | null | undefined;
        repostCount?: number | null | undefined;
        viewCount?: number | null | undefined;
    }, unknown>>>;
    postCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    profileImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceUrl: z.ZodString;
    subscriptionCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    verified: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type WebXProfileDefinition = z.infer<typeof WebXProfileSchemaDefinition>;
/**
 * Structured public account profile from a bare X profile URL.
 *
 * @openapiSchema WebXProfile
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.xprofile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebXProfile.kt
 */
export declare const WebXProfileSchema: z.ZodType<WebXProfileDefinition>;
export type WebXProfile = z.infer<typeof WebXProfileSchema>;
export {};
//# sourceMappingURL=xprofile.d.ts.map