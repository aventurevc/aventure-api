// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCompanyLinkSchemaDefinition = z.object({
    /** Industry / subtitle */
    industry: z.string().nullish(),
    /** Location text */
    location: z.string().nullish(),
    /** Company / page name */
    name: z.string().nullish(),
    /** LinkedIn URL */
    profileUrl: z.string().nullish(),
});
/**
 * A related/affiliated company link.
 *
 * @openapiSchema WebCompanyLink
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyLinkSchema = WebCompanyLinkSchemaDefinition;
//# sourceMappingURL=company-link.js.map