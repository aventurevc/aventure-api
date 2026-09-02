// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCrunchbaseMoneySchema } from "./crunchbase-money.js";
/**
 * Crunchbase funding roll-up.
 *
 * @openapiSchema WebCrunchbaseFunding
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-funding
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseFundingSchema = z.object({
    /** Total funding raised to date */
    fundingTotal: WebCrunchbaseMoneySchema.nullish(),
    /** Number of funding rounds */
    numFundingRounds: z.int().nullish(),
    /** Number of investors */
    numInvestors: z.int().nullish(),
    /** Number of lead investors */
    numLeadInvestors: z.int().nullish(),
});
//# sourceMappingURL=crunchbase-funding.js.map