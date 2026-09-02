// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCrunchbaseLinkSchemaDefinition = z.object({
    /** Company name */
    name: z.string().nullish(),
    /** Crunchbase profile URL */
    profileUrl: z.string().nullish(),
});
/**
 * A related Crunchbase company link.
 *
 * @openapiSchema WebCrunchbaseLink
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export const WebCrunchbaseLinkSchema = WebCrunchbaseLinkSchemaDefinition;
//# sourceMappingURL=crunchbase-link.js.map