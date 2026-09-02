// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebRelatedProfileSchemaDefinition = z.object({
    /** Headline / about line */
    about: z.string().nullish(),
    /** Follower-count and location composite as shown on LinkedIn */
    location: z.string().nullish(),
    /** Name */
    name: z.string().nullish(),
    /** Related profile URL */
    profileUrl: z.string().nullish(),
});
/**
 * A related LinkedIn profile.
 *
 * @openapiSchema WebRelatedProfile
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.related-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebRelatedProfileSchema = WebRelatedProfileSchemaDefinition;
//# sourceMappingURL=related-profile.js.map