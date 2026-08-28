import { z } from "zod/v4";
declare const PersonCreateSchemaDefinition: z.ZodObject<{
    person: z.ZodObject<{
        gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            picture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nameMiddle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            workflowStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, z.core.$strip>>>;
        suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    urlLink: z.ZodArray<z.ZodType<{
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
    }, unknown>>>;
}, z.core.$strip>;
type PersonCreateDefinition = z.infer<typeof PersonCreateSchemaDefinition>;
/**
 * Person create envelope. urlLink must include at least one current URL.
 *
 * @openapiSchema PersonCreate
 * @endpoint POST /v1/people/detail
 * @contractShape person.create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonCreate.kt
 */
export declare const PersonCreateSchema: z.ZodType<PersonCreateDefinition>;
export type PersonCreate = z.infer<typeof PersonCreateSchema>;
export {};
//# sourceMappingURL=create.d.ts.map