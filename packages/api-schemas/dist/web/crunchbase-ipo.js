// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCrunchbaseMoneySchema } from "./crunchbase-money.js";
/**
 * Crunchbase IPO details.
 *
 * @openapiSchema WebCrunchbaseIpo
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-ipo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseIpoSchema = z.object({
    /** Amount raised at IPO */
    amountRaised: WebCrunchbaseMoneySchema.nullish(),
    /** IPO date (raw source text) */
    date: z.string().nullish(),
    /** Share price at IPO */
    sharePrice: WebCrunchbaseMoneySchema.nullish(),
    /** Stock exchange link */
    stockLink: z.string().nullish(),
    /** Stock ticker symbol */
    stockSymbol: z.string().nullish(),
});
//# sourceMappingURL=crunchbase-ipo.js.map