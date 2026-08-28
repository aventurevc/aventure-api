import { z } from "zod/v4";
/**
 * CDN or hosting provider fronting a web URL.
 *
 * @openapiSchema EntityUrlCrawlCdnProvider
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/people
 * @endpoint POST /v1/entities/{entityId}/urls
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint POST /v1/people/{personId}/urls
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
 * @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
 * @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PATCH /v1/people/{personId}/urls/{urlId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/people/{associationId}
 * @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/people/{personId}/urls/{urlId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
 * @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
 * @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
 * @endpoint DELETE /v1/people/{personId}/urls/{urlId}
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @usedBySchema EntityUrlLinkMutationSchema
 * @usedBySchema EntityUrlLinkSchema
 * @contractShape entity.url-crawl-cdn-provider
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/CrawlMetadata.kt
 */
export declare const EntityUrlCrawlCdnProviderSchema: z.ZodEnum<{
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
}>;
export type EntityUrlCrawlCdnProvider = z.infer<typeof EntityUrlCrawlCdnProviderSchema>;
//# sourceMappingURL=url-crawl-cdn-provider.d.ts.map