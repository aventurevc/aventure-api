// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebXProfilePostSchema } from "./xprofile-post.js";
const WebXProfileSchemaDefinition = z.object({
    /** Provider X account identifier */
    accountId: z.string().nullish(),
    /** Public profile banner image URL */
    bannerUrl: z.string().nullish(),
    /** Public profile biography */
    biography: z.string().nullish(),
    /** Public birth date as returned by X */
    birthDate: z.string().nullish(),
    /** Whether X marks this as a business account */
    businessAccount: z.boolean().nullish(),
    /** External link published on the profile */
    externalLink: z.string().nullish(),
    /** Server timestamp when the profile was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** Follower count */
    followerCount: z.number().int().nullish(),
    /** Number of accounts followed */
    followingCount: z.number().int().nullish(),
    /** Whether X marks this as a government account */
    governmentAccount: z.boolean().nullish(),
    /** Public X account handle */
    handle: z.string().nullish(),
    /** Account join date as returned by X */
    joinedAt: z.string().nullish(),
    /** Profile location text */
    location: z.string().nullish(),
    /** Public profile display name */
    name: z.string(),
    /** Recent authored posts included in the profile snapshot */
    post: z.array(WebXProfilePostSchema),
    /** Total authored post count */
    postCount: z.number().int().nullish(),
    /** Public profile image URL */
    profileImageUrl: z.string().nullish(),
    /** Canonical X profile URL returned by the provider */
    profileUrl: z.string().nullish(),
    /** Canonical X profile URL retained as source identity */
    sourceUrl: z.string(),
    /** Subscription count */
    subscriptionCount: z.number().int().nullish(),
    /** Whether X marks the account verified */
    verified: z.boolean().nullish(),
});
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
export const WebXProfileSchema = WebXProfileSchemaDefinition;
//# sourceMappingURL=xprofile.js.map