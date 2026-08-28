import { z } from "zod/v4";
declare const EntityUrlLinkMutationSchemaDefinition: z.ZodObject<{
    crawlCdnProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        akamai: "akamai";
        awsCloudfront: "awsCloudfront";
        azureCdn: "azureCdn";
        bunny: "bunny";
        cdn77: "cdn77";
        cdnetworks: "cdnetworks";
        cloudflare: "cloudflare";
        digitalocean: "digitalocean";
        fastly: "fastly";
        gcore: "gcore";
        googlecloudCdn: "googlecloudCdn";
        incapsula: "incapsula";
        keycdn: "keycdn";
        leaseweb: "leaseweb";
        netlify: "netlify";
        none: "none";
        stackpath: "stackpath";
        sucuri: "sucuri";
        unknown: "unknown";
        vercel: "vercel";
    }>>>;
    crawlRenderMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        jsEnhanced: "jsEnhanced";
        jsRequired: "jsRequired";
        static: "static";
    }>>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    statusChecked: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityUrlLinkMutationDefinition = z.infer<typeof EntityUrlLinkMutationSchemaDefinition>;
/**
 * URL link create/update mutation. urlType classifies the platform; isCurrent and isPrimary carry lifecycle and primacy. Entity-owned website rows cannot be active when the entity operatingStatus is terminal (Acquired, Closed, or Inactive).
 *
 * @openapiSchema EntityUrlLinkMutation
 * @endpoint POST /v1/entities/{entityId}/urls
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/people/{personId}/urls
 * @endpoint POST /v1/people/detail
 * @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PATCH /v1/people/{personId}/urls/{urlId}
 * @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PUT /v1/people/{personId}/urls/{urlId}
 * @usedBySchema EntityCreateSchema
 * @usedBySchema PersonCreateSchema
 * @contractShape entity.url-link-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlLinkMutation.kt
 */
export declare const EntityUrlLinkMutationSchema: z.ZodType<EntityUrlLinkMutationDefinition>;
export type EntityUrlLinkMutation = z.infer<typeof EntityUrlLinkMutationSchema>;
export {};
//# sourceMappingURL=url-link-mutation.d.ts.map