// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCrunchbaseInvestorSchemaDefinition = z.object({
    /** Investor type */
    investorType: z.string().nullish(),
    /** Whether the investor led the round */
    leadInvestor: z.boolean().nullish(),
    /** Investor name */
    name: z.string().nullish(),
    /** Round the investor participated in */
    roundName: z.string().nullish(),
});
/**
 * A Crunchbase cap-table investor entry.
 *
 * @openapiSchema WebCrunchbaseInvestor
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-investor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseInvestorSchema = WebCrunchbaseInvestorSchemaDefinition;
//# sourceMappingURL=crunchbase-investor.js.map