import { z } from "zod/v4";
declare const EntityCreateSchemaDefinition: z.ZodObject<{
    entity: z.ZodObject<{
        allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        nameAlias: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>>>;
        nameBrand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Closed: "Closed";
            "Closed (Acquihire)": "Closed (Acquihire)";
            Inactive: "Inactive";
            Operating: "Operating";
        }>>>;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            isFeatured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            isVerified: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    urlLink: z.ZodOptional<z.ZodArray<z.ZodType<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        url?: string | null | undefined;
        urlType?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        url?: string | null | undefined;
        urlType?: string | null | undefined;
    }, unknown>>>>;
}, z.core.$strip>;
type EntityCreateDefinition = z.infer<typeof EntityCreateSchemaDefinition>;
/**
 * Canonical request body for creating a new entity. Carries the entity payload plus its URL set; duplicate detection runs server-side and returns a conflict envelope when potential matches exist. Override review gates with GateOverride query parameters after reviewing 409 ProblemDetail.details.candidate from the original create conflict.
 *
 * @openapiSchema EntityCreate
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreate.kt
 */
export declare const EntityCreateSchema: z.ZodType<EntityCreateDefinition>;
export type EntityCreate = z.infer<typeof EntityCreateSchema>;
export {};
//# sourceMappingURL=create.d.ts.map