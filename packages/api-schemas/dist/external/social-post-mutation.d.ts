import { z } from "zod/v4";
declare const ExternalSocialPostMutationSchemaDefinition: z.ZodObject<{
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalPostId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    mentionedEntityId: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    mentionedPersonId: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    platform: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        linkedin: "linkedin";
        other: "other";
        threads: "threads";
        tiktok: "tiktok";
        xTwitter: "xTwitter";
    }>>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summaryGeneratedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ExternalSocialPostMutationDefinition = z.infer<typeof ExternalSocialPostMutationSchemaDefinition>;
/**
 * Externally-authored social media post create/update mutation with an optional proven entity or person author and separate associated entity/person lists.
 *
 * @openapiSchema ExternalSocialPostMutation
 * @endpoint POST /v1/research/external-social-posts
 * @endpoint PATCH /v1/research/external-social-posts/{externalSocialPostId}
 * @endpoint PUT /v1/research/external-social-posts/{externalSocialPostId}
 * @contractShape external.social-post-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPostMutation.kt
 */
export declare const ExternalSocialPostMutationSchema: z.ZodType<ExternalSocialPostMutationDefinition>;
export type ExternalSocialPostMutation = z.infer<typeof ExternalSocialPostMutationSchema>;
export {};
//# sourceMappingURL=social-post-mutation.d.ts.map