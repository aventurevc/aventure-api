// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebProfileLinkSchemaDefinition = z.object({
    /** Link label */
    label: z.string().nullish(),
    /** Target URL */
    url: z.string().nullish(),
});
/**
 * A labeled bio link.
 *
 * @openapiSchema WebProfileLink
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.profile-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebProfileLinkSchema = WebProfileLinkSchemaDefinition;
//# sourceMappingURL=profile-link.js.map