// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { ExternalSocialPostPermalinkSchema } from "./social-post-permalink.js";
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
export const ExternalSocialPostSchema = z.object({
    /** Post author handle or display name when known. */
    author: z.string().nullish(),
    /** Captured post body when available. */
    content: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }),
    /** Type-safe UUID identifier for externally-authored social media posts */
    id: z.uuid(),
    isCurrent: z.boolean(),
    /** Last time ingest fetched or summarized this post URL. */
    lastFetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Entities mentioned by the post; the proven owner is excluded. */
    mentionedEntityId: z.array(z.uuid()),
    /** People mentioned by the post; the proven owner is excluded. */
    mentionedPersonId: z.array(z.uuid()),
    /** Proven author entity or person when authoritative evidence exists. */
    owner: EntityPersonOwnerSchema.nullish(),
    /** Canonical permalink identity for this external social post. */
    permalink: ExternalSocialPostPermalinkSchema,
    /** Post publish instant when known. */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** LLM-generated summary of the post body. */
    summary: z.string().nullish(),
    /** Timestamp when summary was last generated. */
    summaryGeneratedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Post title or first-line excerpt when known. */
    title: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
//# sourceMappingURL=social-post.js.map