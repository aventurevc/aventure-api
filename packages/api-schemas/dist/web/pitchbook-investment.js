// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPitchbookInvestmentSchemaDefinition = z.object({
    /** Invested company name */
    companyName: z.string().nullish(),
    /** Invested company URL */
    companyUrl: z.string().nullish(),
    /** Deal date (raw source text) */
    dealDate: z.string().nullish(),
    /** Deal size as displayed */
    dealSize: z.string().nullish(),
    /** Deal type */
    dealType: z.string().nullish(),
    /** Industry text */
    industry: z.string().nullish(),
});
/**
 * A PitchBook-listed investment.
 *
 * @openapiSchema WebPitchbookInvestment
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-investment
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export const WebPitchbookInvestmentSchema = WebPitchbookInvestmentSchemaDefinition;
//# sourceMappingURL=pitchbook-investment.js.map