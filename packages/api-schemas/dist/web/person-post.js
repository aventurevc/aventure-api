// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPersonPostSchemaDefinition = z.object({
    /** Attribution line */
    attribution: z.string().nullish(),
    /** Post creation date (raw ISO-8601 from source) */
    createdAt: z.string().nullish(),
    /** LinkedIn post id */
    id: z.string().nullish(),
    /** Interaction summary (likes/comments label) */
    interaction: z.string().nullish(),
    /** Post URL */
    link: z.string().nullish(),
    /** Post title / lead text */
    title: z.string().nullish(),
});
/**
 * A LinkedIn post authored by the person.
 *
 * @openapiSchema WebPersonPost
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebPersonPostSchema = WebPersonPostSchemaDefinition;
//# sourceMappingURL=person-post.js.map