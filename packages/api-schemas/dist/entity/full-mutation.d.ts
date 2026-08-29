import { z } from "zod/v4";
/**
 * Multipart JSON body for full entity create. Supply base entity fields, required summary and expanded texts, URL links, and optional classifications, addresses, research details, product/service provider join, or manual logo.
 *
 * @openapiSchema EntityFullMutation
 * @endpoint POST /v1/entities/detail/full
 * @contractShape entity.full-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityFullMutation.kt
 */
export declare const EntityFullMutationSchema: z.ZodObject<{
    address: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        countryCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        countryName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        endDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        researchExhausted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        role: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            domicile: "domicile";
            dominant: "dominant";
            origin: "origin";
        }>>>;
        startDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stateName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>>;
    classification: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        inactiveTagOverride?: "ATTACH_INACTIVE" | "REACTIVATE" | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name?: string | null | undefined;
        standardizedClassificationId?: number | null | undefined;
        tagId?: number | null | undefined;
        type?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        inactiveTagOverride?: "ATTACH_INACTIVE" | "REACTIVATE" | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        name?: string | null | undefined;
        standardizedClassificationId?: number | null | undefined;
        tagId?: number | null | undefined;
        type?: string | null | undefined;
    }, unknown>>>>>;
    create: z.ZodType<{
        entity: {
            allowSuspectedShellStrip?: boolean | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            nameAlias?: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[] | null | undefined;
            nameBrand?: string | null | undefined;
            nameLegal?: string | null | undefined;
            newSlug?: string | null | undefined;
            operatingStatus?: "Acquired" | "Acquired Subsidiary" | "Closed" | "Inactive" | "Operating" | null | undefined;
            slug?: string | null | undefined;
            status?: {
                isFeatured?: boolean | null | undefined;
                isHidden?: boolean | null | undefined;
                isVerified?: boolean | null | undefined;
                showOnSitemap?: boolean | null | undefined;
            } | null | undefined;
            typeRecord?: string | null | undefined;
        };
        urlLink?: {
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            url?: string | null | undefined;
            urlType?: string | null | undefined;
        }[] | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        entity: {
            allowSuspectedShellStrip?: boolean | null | undefined;
            defaultCurrency?: string | null | undefined;
            foundedYear?: number | null | undefined;
            nameAlias?: {
                displayable?: boolean | null | undefined;
                name: string;
                type?: "alternativeDba" | "relatedLegal" | null | undefined;
            }[] | null | undefined;
            nameBrand?: string | null | undefined;
            nameLegal?: string | null | undefined;
            newSlug?: string | null | undefined;
            operatingStatus?: "Acquired" | "Acquired Subsidiary" | "Closed" | "Inactive" | "Operating" | null | undefined;
            slug?: string | null | undefined;
            status?: {
                isFeatured?: boolean | null | undefined;
                isHidden?: boolean | null | undefined;
                isVerified?: boolean | null | undefined;
                showOnSitemap?: boolean | null | undefined;
            } | null | undefined;
            typeRecord?: string | null | undefined;
        };
        urlLink?: {
            crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
            crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            status?: string | null | undefined;
            statusChecked?: string | null | undefined;
            url?: string | null | undefined;
            urlType?: string | null | undefined;
        }[] | undefined;
    }, unknown>>;
    manualLogo: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        imageUrl: z.ZodString;
    }, z.core.$strip>>>;
    productServiceProviderId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    researchDetail: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        asOfDate?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        discreteValue?: number | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        valueResearchDetail?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        asOfDate?: string | null | undefined;
        creator?: string | null | undefined;
        dataConfidence?: "high" | "low" | "medium" | null | undefined;
        discreteValue?: number | null | undefined;
        source?: string | null | undefined;
        textValue?: string | null | undefined;
        typeResearchDetail: string;
        valueResearchDetail?: string | null | undefined;
    }, unknown>>>>>;
    text: z.ZodArray<z.ZodType<{
        allowPublicEntityTextWordLimitOverride?: boolean | null | undefined;
        allowSuspectedShellStrip?: boolean | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        source?: string | null | undefined;
        text?: string | null | undefined;
        textName?: string | null | undefined;
        textType?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        allowPublicEntityTextWordLimitOverride?: boolean | null | undefined;
        allowSuspectedShellStrip?: boolean | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        source?: string | null | undefined;
        text?: string | null | undefined;
        textName?: string | null | undefined;
        textType?: string | null | undefined;
    }, unknown>>>;
}, z.core.$strip>;
export type EntityFullMutation = z.infer<typeof EntityFullMutationSchema>;
//# sourceMappingURL=full-mutation.d.ts.map