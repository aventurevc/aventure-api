import { z } from "zod/v4";
/**
 * Crawl4ai markdown filter mode.
 *
 * @openapiSchema WebMarkdownFilter
 * @endpoint GET /v1/web/page
 * @endpoint GET /v1/web/pages
 * @usedBySchema WebPageContentSchema
 * @contractShape web.markdown-filter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPageContent.kt
 */
export declare const WebMarkdownFilterSchema: z.ZodEnum<{
    FIT: "FIT";
    RAW: "RAW";
}>;
export type WebMarkdownFilter = z.infer<typeof WebMarkdownFilterSchema>;
//# sourceMappingURL=markdown-filter.d.ts.map