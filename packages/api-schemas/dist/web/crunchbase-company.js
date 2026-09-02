// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCrunchbaseAcquisitionSchema } from "./crunchbase-acquisition.js";
import { WebCrunchbaseFounderSchema } from "./crunchbase-founder.js";
import { WebCrunchbaseFundingRoundSchema } from "./crunchbase-funding-round.js";
import { WebCrunchbaseFundingSchema } from "./crunchbase-funding.js";
import { WebCrunchbaseInvestorSchema } from "./crunchbase-investor.js";
import { WebCrunchbaseIpoSchema } from "./crunchbase-ipo.js";
import { WebCrunchbaseLinkSchema } from "./crunchbase-link.js";
import { WebCrunchbaseRegionSchema } from "./crunchbase-region.js";
import { WebProfileAttributeSchema } from "./profile-attribute.js";
const WebCrunchbaseCompanySchemaDefinition = z.object({
    /** Short about text */
    about: z.string().nullish(),
    /** Acquiring entity when acquired */
    acquiredBy: WebCrunchbaseAcquisitionSchema.nullish(),
    /** Headquarters address text */
    address: z.string().nullish(),
    /** Source fields not mapped above, preserved as label/value facts */
    attribute: z.array(WebProfileAttributeSchema),
    /** Crunchbase rank (lower is more prominent) */
    cbRank: z.int().nullish(),
    /** Company type */
    companyType: z.string().nullish(),
    /** Contact email */
    contactEmail: z.string().nullish(),
    /** Contact phone */
    contactPhone: z.string().nullish(),
    /** ISO 3166-1 alpha-2 country code */
    countryCode: z.string().nullish(),
    /** Crunchbase permalink slug */
    crunchbaseId: z.string().nullish(),
    /** Employee-count band */
    employeeCountRange: z.string().nullish(),
    /** Server timestamp when the profile was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** Founding date as shown on Crunchbase */
    foundedDate: z.string().nullish(),
    /** Company founders */
    founder: z.array(WebCrunchbaseFounderSchema),
    /** Full company description */
    fullDescription: z.string().nullish(),
    /** Rolled-up funding highlights */
    funding: WebCrunchbaseFundingSchema.nullish(),
    /** Individual funding rounds, most-recent first */
    fundingRound: z.array(WebCrunchbaseFundingRoundSchema),
    /** Headquarters region tags */
    headquartersRegion: z.array(WebCrunchbaseRegionSchema),
    /** Industry classifications */
    industry: z.array(z.string()),
    /** Investors on the cap table */
    investor: z.array(WebCrunchbaseInvestorSchema),
    /** IPO details when public */
    ipo: WebCrunchbaseIpoSchema.nullish(),
    /** IPO status */
    ipoStatus: z.string().nullish(),
    /** Registered legal name */
    legalName: z.string().nullish(),
    /** Company logo image URL */
    logoUrl: z.string().nullish(),
    /** Company name */
    name: z.string(),
    /** Count of acquisitions the company has made */
    numAcquisitions: z.int().nullish(),
    /** Count of investments the company has made */
    numInvestments: z.int().nullish(),
    /** Count of news items Crunchbase lists */
    numNews: z.int().nullish(),
    /** Operating status */
    operatingStatus: z.string().nullish(),
    /** Canonical Crunchbase profile URL */
    profileUrl: z.string().nullish(),
    /** Headquarters continent/region text */
    region: z.string().nullish(),
    /** Similar companies surfaced by Crunchbase */
    similarCompany: z.array(WebCrunchbaseLinkSchema),
    /** Social-media profile URLs */
    socialMediaLink: z.array(z.string()),
    /** Source Crunchbase URL that was scraped */
    sourceUrl: z.string(),
    /** Public stock ticker symbol */
    stockSymbol: z.string().nullish(),
    /** Crunchbase UUID */
    uuid: z.string().nullish(),
    /** Official website URL */
    website: z.string().nullish(),
});
/**
 * Structured public profile of a company from a Crunchbase organization URL.
 *
 * @openapiSchema WebCrunchbaseCompany
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.crunchbase-company
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export const WebCrunchbaseCompanySchema = WebCrunchbaseCompanySchemaDefinition;
//# sourceMappingURL=crunchbase-company.js.map