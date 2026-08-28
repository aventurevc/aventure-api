// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityUrlCrawlCdnProviderSchema } from "./url-crawl-cdn-provider.js";
import { EntityUrlCrawlRenderModeSchema } from "./url-crawl-render-mode.js";
const EntityUrlLinkMutationSchemaDefinition = z.object({
    /** CDN or hosting provider observed during crawl checks. */
    crawlCdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
    /** JavaScript rendering requirement observed during crawl checks. */
    crawlRenderMode: EntityUrlCrawlRenderModeSchema.nullish(),
    /** Whether the owner currently uses this URL. Defaults true on create; update omits preserve the existing value. For terminal entity operatingStatus values (Acquired, Closed, Inactive), website rows must be written with isCurrent=false. */
    isCurrent: z.boolean().nullish(),
    /** Whether this is the owner's primary URL for its urlType. Defaults true for current create rows; update omits preserve the existing value. Setting isCurrent=false forces isPrimary=false; terminal entities cannot have a current primary website row. Website primacy belongs to the homepage: while the owner has a current root-URL website row, a deep-path or query-carrying website URL cannot be primary — such a create is stored with isPrimary=false (even when requested true), and an update promoting one, or moving a primary row's URL across the root/deep boundary, is rejected (409). */
    isPrimary: z.boolean().nullish(),
    /** Crawl/check status label, not lifecycle. */
    status: z.string().nullish(),
    /** Last crawl/check timestamp. */
    statusChecked: z.iso.datetime({ offset: true }).nullish(),
    /** Absolute owner URL (https://...), normalized before validation. Must be a page the owner actually operates. URL surface misclassification is rejected (422): news/press articles such as a dated article path or a techcrunch.com/businesswire.com/forbes.com article — record it through the owner's canonical news create surface, NEVER as a website link; domain-marketplace/for-sale pages (dan.com, hugedomains.com, ...); and binary assets (.png/.pdf/...). Eponymous Product/Service full-create may omit the entire URL link array when no distinct official page URL exists. Submit either `www.` or apex host form; after write the stored host form is normalized from live evidence — apex (no `www.`) when that route serves healthy without redirecting to `www.`, the `www.` form otherwise — so the persisted URL may differ from the submitted one by its `www.` label. */
    url: z.string().nullish(),
    /** Canonical platform role for the URL, from EntityUrlType (website, linkedin, twitter, github, crunchbase, wikipedia, appstore, ...). Pick the platform the URL host belongs to for owner-specific platform paths. Platform host roots and first-party product pages stay `website`; security quote paths, social profiles, marketplace listings, and similar owner-specific platform paths use their platform type. Lifecycle (former domain, rebrand source) lives on isCurrent/isPrimary, never here. Required on create unless inferable from the URL host/path. */
    urlType: z.string().nullish(),
});
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
export const EntityUrlLinkMutationSchema = EntityUrlLinkMutationSchemaDefinition;
//# sourceMappingURL=url-link-mutation.js.map