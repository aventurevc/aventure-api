// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPitchbookSocialSchemaDefinition = z.object({
    /** Domain */
    domain: z.string().nullish(),
    /** Profile URL */
    link: z.string().nullish(),
});
/**
 * A PitchBook social-media link.
 *
 * @openapiSchema WebPitchbookSocial
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-social
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export const WebPitchbookSocialSchema = WebPitchbookSocialSchemaDefinition;
//# sourceMappingURL=pitchbook-social.js.map