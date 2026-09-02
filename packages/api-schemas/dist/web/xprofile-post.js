// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebXProfilePostSchemaDefinition = z.object({
    /** Post body */
    description: z.string().nullish(),
    /** Like count */
    likeCount: z.number().int().nullish(),
    /** Post publish date as returned by X */
    postedAt: z.string().nullish(),
    /** X post identifier */
    postId: z.string().nullish(),
    /** Canonical X post permalink */
    postUrl: z.string().nullish(),
    /** Reply count */
    replyCount: z.number().int().nullish(),
    /** Repost count */
    repostCount: z.number().int().nullish(),
    /** View count */
    viewCount: z.number().int().nullish(),
});
/**
 * Recent post nested in an X profile snapshot.
 *
 * @openapiSchema WebXProfilePost
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebXProfileSchema
 * @contractShape web.xprofile-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebXProfile.kt
 */
export const WebXProfilePostSchema = WebXProfilePostSchemaDefinition;
//# sourceMappingURL=xprofile-post.js.map