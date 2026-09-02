// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCrunchbaseRegionSchemaDefinition = z.object({
    /** Crunchbase region id */
    id: z.string().nullish(),
    /** Region name */
    value: z.string().nullish(),
});
/**
 * A Crunchbase location/region tag.
 *
 * @openapiSchema WebCrunchbaseRegion
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-region
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export const WebCrunchbaseRegionSchema = WebCrunchbaseRegionSchemaDefinition;
//# sourceMappingURL=crunchbase-region.js.map