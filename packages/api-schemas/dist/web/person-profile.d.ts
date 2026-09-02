import { z } from "zod/v4";
declare const WebPersonProfileSchemaDefinition: z.ZodObject<{
    about: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    activity: z.ZodArray<z.ZodType<{
        id?: string | null | undefined;
        imageUrl?: string | null | undefined;
        interaction?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        id?: string | null | undefined;
        imageUrl?: string | null | undefined;
        interaction?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown>>>;
    alsoViewedProfile: z.ZodArray<z.ZodType<{
        about?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        about?: string | null | undefined;
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
    bioLink: z.ZodArray<z.ZodType<{
        label?: string | null | undefined;
        url?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        label?: string | null | undefined;
        url?: string | null | undefined;
    }, unknown>>>;
    city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    connectionCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentCompany: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentCompanyLocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentCompanySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currentTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    education: z.ZodArray<z.ZodType<{
        endYear?: string | null | undefined;
        school?: string | null | undefined;
        schoolLogoUrl?: string | null | undefined;
        schoolUrl?: string | null | undefined;
        startYear?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        endYear?: string | null | undefined;
        school?: string | null | undefined;
        schoolLogoUrl?: string | null | undefined;
        schoolUrl?: string | null | undefined;
        startYear?: string | null | undefined;
    }, unknown>>>;
    educationDetail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    experience: z.ZodArray<z.ZodType<{
        company?: string | null | undefined;
        companyId?: string | null | undefined;
        companyLogoUrl?: string | null | undefined;
        companyUrl?: string | null | undefined;
        endDate?: string | null | undefined;
        startDate?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        company?: string | null | undefined;
        companyId?: string | null | undefined;
        companyLogoUrl?: string | null | undefined;
        companyUrl?: string | null | undefined;
        endDate?: string | null | undefined;
        startDate?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown>>>;
    fetchedAt: z.ZodISODateTime;
    firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    followerCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    headline: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    influencer: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedinNumericId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    linkedinSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    memorializedAccount: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    photoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    post: z.ZodArray<z.ZodType<{
        attribution?: string | null | undefined;
        createdAt?: string | null | undefined;
        id?: string | null | undefined;
        interaction?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        attribution?: string | null | undefined;
        createdAt?: string | null | undefined;
        id?: string | null | undefined;
        interaction?: string | null | undefined;
        link?: string | null | undefined;
        title?: string | null | undefined;
    }, unknown>>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    similarProfile: z.ZodArray<z.ZodType<{
        about?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        about?: string | null | undefined;
        location?: string | null | undefined;
        name?: string | null | undefined;
        profileUrl?: string | null | undefined;
    }, unknown>>>;
    sourceUrl: z.ZodString;
}, z.core.$strip>;
type WebPersonProfileDefinition = z.infer<typeof WebPersonProfileSchemaDefinition>;
/**
 * Structured public profile of a person from a LinkedIn profile URL.
 *
 * @openapiSchema WebPersonProfile
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebProfileScrapeResultSchema
 * @contractShape web.person-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebPersonProfileSchema: z.ZodType<WebPersonProfileDefinition>;
export type WebPersonProfile = z.infer<typeof WebPersonProfileSchema>;
export {};
//# sourceMappingURL=person-profile.d.ts.map