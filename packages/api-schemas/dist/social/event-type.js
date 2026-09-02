// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SocialEventTypeSchema = z.enum([
    "fundraiseRound",
    "acquisition",
    "newCompany",
    "newsArticle",
]);
//# sourceMappingURL=event-type.js.map