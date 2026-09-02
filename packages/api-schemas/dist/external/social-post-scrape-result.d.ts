import { z } from "zod/v4";
declare const ExternalSocialPostScrapeResultSchemaDefinition: z.ZodObject<{
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    platform: z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        linkedin: "linkedin";
        other: "other";
        threads: "threads";
        tiktok: "tiktok";
        xTwitter: "xTwitter";
    }>;
    post: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    snapshotId: z.ZodString;
    sourceUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        DEAD_PAGE: "DEAD_PAGE";
        FAILED: "FAILED";
        READY: "READY";
        RUNNING: "RUNNING";
    }>;
}, z.core.$strip>;
type ExternalSocialPostScrapeResultDefinition = z.infer<typeof ExternalSocialPostScrapeResultSchemaDefinition>;
/**
 * Async state and, once ready, canonical externally-authored social post.
 *
 * @openapiSchema ExternalSocialPostScrapeResult
 * @endpoint POST /v1/research/external-social-posts/scrape/{snapshotId}
 * @contractShape external.social-post-scrape-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export declare const ExternalSocialPostScrapeResultSchema: z.ZodType<ExternalSocialPostScrapeResultDefinition>;
export type ExternalSocialPostScrapeResult = z.infer<typeof ExternalSocialPostScrapeResultSchema>;
export {};
//# sourceMappingURL=social-post-scrape-result.d.ts.map