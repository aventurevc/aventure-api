import { z } from "zod/v4";
declare const WebCompanyProfileSchemaDefinition: z.ZodObject<{
    about: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    aboutUnformatted: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    additionalInformation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    affiliatedPage: z.ZodArray<z.ZodType<{
        industry?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        industry?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
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
    bannerUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyNumericId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companySize: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    crunchbaseUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    employeeCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    featuredEmployee: z.ZodArray<z.ZodType<{
        name?: string | null | undefined;
        photoUrl?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        name?: string | null | undefined;
        photoUrl?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
    fetchedAt: z.ZodISODateTime;
    followerCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    funding: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastRoundDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastRoundType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        roundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    }, z.core.$strip>>>;
    headquarters: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metaDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    office: z.ZodArray<z.ZodType<{
        address?: string | null | undefined;
        directionsUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        address?: string | null | undefined;
        directionsUrl?: string | null | undefined;
    }, unknown>>>;
    operatingCountry: z.ZodArray<z.ZodString>;
    organizationType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    similarCompany: z.ZodArray<z.ZodType<{
        industry?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        industry?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
    slogan: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceUrl: z.ZodString;
    update: z.ZodArray<z.ZodType<{
        commentCount?: number | null | undefined;
        date?: string | null | undefined;
        image: string[];
        likeCount?: number | null | undefined;
        postId?: string | null | undefined;
        postUrl?: string | null | undefined;
        text?: string | null | undefined;
        textHtml?: string | null | undefined;
        time?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        commentCount?: number | null | undefined;
        date?: string | null | undefined;
        image: string[];
        likeCount?: number | null | undefined;
        postId?: string | null | undefined;
        postUrl?: string | null | undefined;
        text?: string | null | undefined;
        textHtml?: string | null | undefined;
        time?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown>>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    websiteDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCompanyProfileDefinition = z.infer<typeof WebCompanyProfileSchemaDefinition>;
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
export declare const WebCompanyProfileSchema: z.ZodType<WebCompanyProfileDefinition>;
export type WebCompanyProfile = z.infer<typeof WebCompanyProfileSchema>;
export {};
//# sourceMappingURL=company-profile.d.ts.map