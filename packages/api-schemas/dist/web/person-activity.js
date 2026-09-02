// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPersonActivitySchemaDefinition = z.object({
    /** LinkedIn post id */
    id: z.string().nullish(),
    /** Activity image URL */
    imageUrl: z.string().nullish(),
    /** Interaction sentence as shown on LinkedIn, prefixed with the actor's name */
    interaction: z.string().nullish(),
    /** Activity post URL */
    link: z.string().nullish(),
    /** Activity title / lead text */
    title: z.string().nullish(),
});
/**
 * A LinkedIn activity item.
 *
 * @openapiSchema WebPersonActivity
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-activity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebPersonActivitySchema = WebPersonActivitySchemaDefinition;
//# sourceMappingURL=person-activity.js.map