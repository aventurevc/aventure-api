// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCrunchbaseInvestorRefSchema } from "./crunchbase-investor-ref.js";
import { WebCrunchbaseMoneySchema } from "./crunchbase-money.js";
const WebCrunchbaseFundingRoundSchemaDefinition = z.object({
    /** Announcement date (raw source text) */
    announcedOn: z.string().nullish(),
    /** Lead investors in the round */
    leadInvestor: z.array(WebCrunchbaseInvestorRefSchema),
    /** Amount raised in the round */
    moneyRaised: WebCrunchbaseMoneySchema.nullish(),
    /** Round label */
    title: z.string().nullish(),
    /** Transaction name */
    transactionName: z.string().nullish(),
});
/**
 * A single Crunchbase funding round.
 *
 * @openapiSchema WebCrunchbaseFundingRound
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-funding-round
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseFundingRoundSchema = WebCrunchbaseFundingRoundSchemaDefinition;
//# sourceMappingURL=crunchbase-funding-round.js.map