// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebPitchbookCompetitorSchema } from "./pitchbook-competitor.js";
import { WebPitchbookInvestmentSchema } from "./pitchbook-investment.js";
import { WebPitchbookMoneySchema } from "./pitchbook-money.js";
import { WebPitchbookSocialSchema } from "./pitchbook-social.js";
import { WebProfileAttributeSchema } from "./profile-attribute.js";
const WebPitchbookCompanySchemaDefinition = z.object({
    /** Source fields not mapped above, preserved as label/value facts */
    attribute: z.array(WebProfileAttributeSchema),
    /** Competitor companies */
    competitor: z.array(WebPitchbookCompetitorSchema),
    /** Company description */
    description: z.string().nullish(),
    /** Employee count */
    employeeCount: z.int().nullish(),
    /** Server timestamp when the profile was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** Number of financing rounds */
    financingRoundCount: z.int().nullish(),
    /** Investments the company has made */
    investment: z.array(WebPitchbookInvestmentSchema),
    /** Number of investments the company has made */
    investmentCount: z.int().nullish(),
    /** Latest deal amount as displayed */
    latestDealAmount: z.string().nullish(),
    /** Structured latest deal amount */
    latestDealAmountValue: WebPitchbookMoneySchema.nullish(),
    /** Latest deal date (raw source text) */
    latestDealDate: z.string().nullish(),
    /** Latest deal type */
    latestDealType: z.string().nullish(),
    /** Company name */
    name: z.string(),
    /** PitchBook company id */
    pitchbookId: z.string().nullish(),
    /** Canonical PitchBook profile URL */
    profileUrl: z.string().nullish(),
    /** Social-media links */
    socialLink: z.array(WebPitchbookSocialSchema),
    /** Source PitchBook URL that was scraped */
    sourceUrl: z.string(),
    /** Ownership status */
    status: z.string().nullish(),
    /** Year founded */
    yearFounded: z.int().nullish(),
});
/**
 * Structured public profile of a company from a PitchBook company URL.
 *
 * @openapiSchema WebPitchbookCompany
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.pitchbook-company
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export const WebPitchbookCompanySchema = WebPitchbookCompanySchemaDefinition;
//# sourceMappingURL=pitchbook-company.js.map