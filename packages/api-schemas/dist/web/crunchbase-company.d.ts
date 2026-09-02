import { z } from "zod/v4";
declare const WebCrunchbaseCompanySchemaDefinition: z.ZodObject<{
    about: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    acquiredBy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        acquirer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        acquirerPermalink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        acquisitionPrice: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        transactionName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    attribute: z.ZodArray<z.ZodType<{
        group?: string | null | undefined;
        label: string;
        link?: string | null | undefined;
        value: string;
    }, unknown, z.core.$ZodTypeInternals<{
        group?: string | null | undefined;
        label: string;
        link?: string | null | undefined;
        value: string;
    }, unknown>>>;
    cbRank: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contactEmail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contactPhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    crunchbaseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employeeCountRange: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fetchedAt: z.ZodISODateTime;
    foundedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    founder: z.ZodArray<z.ZodType<{
        crunchbaseId?: string | null | undefined;
        name?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        crunchbaseId?: string | null | undefined;
        name?: string | null | undefined;
    }, unknown>>>;
    fullDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    funding: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        fundingTotal: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        numFundingRounds: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        numInvestors: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        numLeadInvestors: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    }, z.core.$strip>>>;
    fundingRound: z.ZodArray<z.ZodType<{
        announcedOn?: string | null | undefined;
        leadInvestor: {
            imageUrl?: string | null | undefined;
            name?: string | null | undefined;
            permalink?: string | null | undefined;
        }[];
        moneyRaised?: {
            currency?: string | null | undefined;
            value?: number | null | undefined;
            valueUsd?: number | null | undefined;
        } | null | undefined;
        title?: string | null | undefined;
        transactionName?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        announcedOn?: string | null | undefined;
        leadInvestor: {
            imageUrl?: string | null | undefined;
            name?: string | null | undefined;
            permalink?: string | null | undefined;
        }[];
        moneyRaised?: {
            currency?: string | null | undefined;
            value?: number | null | undefined;
            valueUsd?: number | null | undefined;
        } | null | undefined;
        title?: string | null | undefined;
        transactionName?: string | null | undefined;
    }, unknown>>>;
    headquartersRegion: z.ZodArray<z.ZodType<{
        id?: string | null | undefined;
        value?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        id?: string | null | undefined;
        value?: string | null | undefined;
    }, unknown>>>;
    industry: z.ZodArray<z.ZodString>;
    investor: z.ZodArray<z.ZodType<{
        investorType?: string | null | undefined;
        leadInvestor?: boolean | null | undefined;
        name?: string | null | undefined;
        roundName?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        investorType?: string | null | undefined;
        leadInvestor?: boolean | null | undefined;
        name?: string | null | undefined;
        roundName?: string | null | undefined;
    }, unknown>>>;
    ipo: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        amountRaised: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sharePrice: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, z.core.$strip>>>;
        stockLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stockSymbol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    ipoStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    legalName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    numAcquisitions: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    numInvestments: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    numNews: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    similarCompany: z.ZodArray<z.ZodType<{
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
    socialMediaLink: z.ZodArray<z.ZodString>;
    sourceUrl: z.ZodString;
    stockSymbol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    uuid: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseCompanyDefinition = z.infer<typeof WebCrunchbaseCompanySchemaDefinition>;
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
export declare const WebCrunchbaseCompanySchema: z.ZodType<WebCrunchbaseCompanyDefinition>;
export type WebCrunchbaseCompany = z.infer<typeof WebCrunchbaseCompanySchema>;
export {};
//# sourceMappingURL=crunchbase-company.d.ts.map