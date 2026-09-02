import { z } from "zod/v4";
declare const WebPitchbookCompanySchemaDefinition: z.ZodObject<{
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
    competitor: z.ZodArray<z.ZodType<{
        financingStatus?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        financingStatus?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employeeCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    fetchedAt: z.ZodISODateTime;
    financingRoundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    investment: z.ZodArray<z.ZodType<{
        companyName?: string | null | undefined;
        companyUrl?: string | null | undefined;
        dealDate?: string | null | undefined;
        dealSize?: string | null | undefined;
        dealType?: string | null | undefined;
        industry?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        companyName?: string | null | undefined;
        companyUrl?: string | null | undefined;
        dealDate?: string | null | undefined;
        dealSize?: string | null | undefined;
        dealType?: string | null | undefined;
        industry?: string | null | undefined;
    }, unknown>>>;
    investmentCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    latestDealAmount: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latestDealAmountValue: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    latestDealDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latestDealType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    pitchbookId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialLink: z.ZodArray<z.ZodType<{
        domain?: string | null | undefined;
        link?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        domain?: string | null | undefined;
        link?: string | null | undefined;
    }, unknown>>>;
    sourceUrl: z.ZodString;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    yearFounded: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type WebPitchbookCompanyDefinition = z.infer<typeof WebPitchbookCompanySchemaDefinition>;
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
export declare const WebPitchbookCompanySchema: z.ZodType<WebPitchbookCompanyDefinition>;
export type WebPitchbookCompany = z.infer<typeof WebPitchbookCompanySchema>;
export {};
//# sourceMappingURL=pitchbook-company.d.ts.map