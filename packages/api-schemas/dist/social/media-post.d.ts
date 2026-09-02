import { z } from "zod/v4";
declare const SocialMediaPostSchemaDefinition: z.ZodObject<{
    attemptCount: z.ZodInt;
    createdAt: z.ZodISODateTime;
    eventType: z.ZodEnum<{
        acquisition: "acquisition";
        fundraiseRound: "fundraiseRound";
        newCompany: "newCompany";
        newsArticle: "newsArticle";
    }>;
    externalPostId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodNumber;
    lastError: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    skipReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceId: z.ZodString;
    status: z.ZodEnum<{
        failed: "failed";
        pending: "pending";
        posted: "posted";
        skipped: "skipped";
    }>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type SocialMediaPostDefinition = z.infer<typeof SocialMediaPostSchemaDefinition>;
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
export declare const SocialMediaPostSchema: z.ZodType<SocialMediaPostDefinition>;
export type SocialMediaPost = z.infer<typeof SocialMediaPostSchema>;
export {};
//# sourceMappingURL=media-post.d.ts.map