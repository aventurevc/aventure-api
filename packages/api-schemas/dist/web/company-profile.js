// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCompanyEmployeeSchema } from "./company-employee.js";
import { WebCompanyFundingSchema } from "./company-funding.js";
import { WebCompanyLinkSchema } from "./company-link.js";
import { WebCompanyOfficeSchema } from "./company-office.js";
import { WebCompanyUpdateSchema } from "./company-update.js";
import { WebProfileAttributeSchema } from "./profile-attribute.js";
const WebCompanyProfileSchemaDefinition = z.object({
    /** Self-description / about text */
    about: z.string().nullish(),
    /** About text with original source formatting */
    aboutUnformatted: z.string().nullish(),
    /** Open-jobs / additional-information blurb */
    additionalInformation: z.string().nullish(),
    /** Affiliated / showcase pages */
    affiliatedPage: z.array(WebCompanyLinkSchema),
    /** Source fields not mapped above, preserved as label/value facts */
    attribute: z.array(WebProfileAttributeSchema),
    /** Cover / banner image URL (never the logo) */
    bannerUrl: z.string().nullish(),
    /** LinkedIn internal numeric company id */
    companyNumericId: z.string().nullish(),
    /** Company size band */
    companySize: z.string().nullish(),
    /** Company LinkedIn slug */
    companySlug: z.string().nullish(),
    /** Crunchbase profile URL */
    crunchbaseUrl: z.string().nullish(),
    /** LinkedIn employee count */
    employeeCount: z.int().nullish(),
    /** Featured employees surfaced on the company page */
    featuredEmployee: z.array(WebCompanyEmployeeSchema),
    /** Server timestamp when the profile was fetched */
    fetchedAt: z.iso.datetime({ offset: true }),
    /** LinkedIn follower count */
    followerCount: z.int().nullish(),
    /** Founding year */
    foundedYear: z.int().nullish(),
    /** Funding signal from LinkedIn (last round summary) */
    funding: WebCompanyFundingSchema.nullish(),
    /** Headquarters location text */
    headquarters: z.string().nullish(),
    /** Industry classification */
    industry: z.string().nullish(),
    /** Direct company logo URL */
    logoUrl: z.string().nullish(),
    /** LinkedIn meta description (name + follower + tagline composite) */
    metaDescription: z.string().nullish(),
    /** Company name */
    name: z.string(),
    /** All office locations with directions links */
    office: z.array(WebCompanyOfficeSchema),
    /** ISO 3166-1 alpha-2 codes of operating countries */
    operatingCountry: z.array(z.string()),
    /** Ownership / organization type */
    organizationType: z.string().nullish(),
    /** Canonical LinkedIn company URL */
    profileUrl: z.string().nullish(),
    /** Similar companies surfaced by LinkedIn */
    similarCompany: z.array(WebCompanyLinkSchema),
    /** Tagline / slogan */
    slogan: z.string().nullish(),
    /** Source LinkedIn company URL that was scraped */
    sourceUrl: z.string(),
    /** Recent company posts */
    update: z.array(WebCompanyUpdateSchema),
    /** Official website URL */
    website: z.string().nullish(),
    /** Bare website domain */
    websiteDomain: z.string().nullish(),
});
/**
 * Structured public profile of a company from a LinkedIn company URL.
 *
 * @openapiSchema WebCompanyProfile
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.company-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyProfileSchema = WebCompanyProfileSchemaDefinition;
//# sourceMappingURL=company-profile.js.map