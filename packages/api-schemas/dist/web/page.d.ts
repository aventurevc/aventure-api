import { z } from "zod/v4";
declare const WebPageSchemaDefinition: z.ZodObject<{
    comparisonTarget: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    offDomain: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    url: z.ZodString;
}, z.core.$strip>;
type WebPageDefinition = z.infer<typeof WebPageSchemaDefinition>;
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
export declare const WebPageSchema: z.ZodType<WebPageDefinition>;
export type WebPage = z.infer<typeof WebPageSchema>;
export {};
//# sourceMappingURL=page.d.ts.map