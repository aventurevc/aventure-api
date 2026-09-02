// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { ExternalSocialPostPlatformSchema } from "./social-post-platform.js";
const ExternalSocialPostMutationSchemaDefinition = z.object({
    /** Post author handle or display name when known. */
    author: z.string().max(500).nullish(),
    /** Captured post body when available. */
    content: z.string().max(100000).nullish(),
    /** The platform's own identifier for this post when the URL exposes one. */
    externalPostId: z.string().max(512).nullish(),
    /** Lifecycle flag. Defaults true on create; update omits preserve existing. */
    isCurrent: z.boolean().nullish(),
    /** Last fetch instant recorded by ingest. */
    lastFetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Entities mentioned by the post; the final proven owner is removed. */
    mentionedEntityId: z.array(z.uuid()).max(1000).nullish(),
    /** People mentioned by the post; the final proven owner is removed. */
    mentionedPersonId: z.array(z.uuid()).max(1000).nullish(),
    /** Proven entity or person author. */
    owner: EntityPersonOwnerSchema.nullish(),
    /** Social platform token. Resolved from the URL host by the service when omitted on create. */
    platform: ExternalSocialPostPlatformSchema.nullish(),
    /** Post publish instant when known. */
    publishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** LLM-generated summary of the post body. */
    summary: z.string().max(100000).nullish(),
    /** Summary generation instant recorded by ingest. */
    summaryGeneratedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Post title or first-line excerpt when known. */
    title: z.string().max(1000).nullish(),
    /** Absolute URL of the post on its platform. */
    url: z.string().max(4096).nullish(),
});
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
export const ExternalSocialPostMutationSchema = ExternalSocialPostMutationSchemaDefinition;
//# sourceMappingURL=social-post-mutation.js.map