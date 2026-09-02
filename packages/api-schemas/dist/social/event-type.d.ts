import { z } from "zod/v4";
/**
 * Research event that triggered a generated social media post: a fundraise round, an acquisition, a newly added company, or a news article.
 *
 * @openapiSchema SocialEventType
 * @endpoint GET /v1/social/posts
 * @endpoint GET /v1/social/posts/{id}
 * @usedBySchema SocialMediaPostSchema
 * @contractShape social.event-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/social/SocialMediaPost.kt
 */
export declare const SocialEventTypeSchema: z.ZodEnum<{
    acquisition: "acquisition";
    fundraiseRound: "fundraiseRound";
    newCompany: "newCompany";
    newsArticle: "newsArticle";
}>;
export type SocialEventType = z.infer<typeof SocialEventTypeSchema>;
//# sourceMappingURL=event-type.d.ts.map