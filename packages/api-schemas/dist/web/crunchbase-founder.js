// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCrunchbaseFounderSchemaDefinition = z.object({
    /** Crunchbase person id / permalink */
    crunchbaseId: z.string().nullish(),
    /** Founder name */
    name: z.string().nullish(),
});
/**
 * A Crunchbase-listed company founder.
 *
 * @openapiSchema WebCrunchbaseFounder
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-founder
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export const WebCrunchbaseFounderSchema = WebCrunchbaseFounderSchemaDefinition;
//# sourceMappingURL=crunchbase-founder.js.map