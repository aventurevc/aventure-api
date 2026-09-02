// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPageSchemaDefinition = z.object({
    /** Natural names of competitors, products, or services named by a comparison page route */
    comparisonTarget: z.array(z.string()).nullish(),
    /** Optional machine-readable discriminator kind (e.g., policy, notice, termsAndConditions) */
    kind: z.string().nullish(),
    /** Optional human-readable label */
    label: z.string().nullish(),
    /** Optional flag indicating if the URL is off-domain */
    offDomain: z.boolean().nullish(),
    /** The target canonical URL of the page */
    url: z.string(),
});
/**
 * Sitemap page details representing a single canonical page entry.
 *
 * @openapiSchema WebPage
 * @endpoint GET /v1/web/crawl
 * @endpoint GET /v1/entities/{entityId}/sites
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @endpoint POST /v1/entities/{entityId}/sites
 * @usedBySchema WebCrawlContentSchema
 * @usedBySchema WebSiteSchema
 * @contractShape web.page
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/website/WebSite.kt
 */
export const WebPageSchema = WebPageSchemaDefinition;
//# sourceMappingURL=page.js.map