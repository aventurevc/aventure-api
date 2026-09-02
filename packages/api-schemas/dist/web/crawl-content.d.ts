import { z } from "zod/v4";
declare const WebCrawlContentSchemaDefinition: z.ZodObject<{
    crawledAt: z.ZodISODateTime;
    link: z.ZodArray<z.ZodType<{
        comparisonTarget?: string[] | null | undefined;
        kind?: string | null | undefined;
        label?: string | null | undefined;
        offDomain?: boolean | null | undefined;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        comparisonTarget?: string[] | null | undefined;
        kind?: string | null | undefined;
        label?: string | null | undefined;
        offDomain?: boolean | null | undefined;
        url: string;
    }, unknown>>>;
    markdown: z.ZodString;
    statusCode: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodString;
}, z.core.$strip>;
type WebCrawlContentDefinition = z.infer<typeof WebCrawlContentSchemaDefinition>;
/**
 * Rich crawl content (markdown + links) of a single fetched public web page.
 *
 * @openapiSchema WebCrawlContent
 * @endpoint GET /v1/web/crawl
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @usedBySchema WebCrawlJobSchema
 * @contractShape web.crawl-content
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrawlContent.kt
 */
export declare const WebCrawlContentSchema: z.ZodType<WebCrawlContentDefinition>;
export type WebCrawlContent = z.infer<typeof WebCrawlContentSchema>;
export {};
//# sourceMappingURL=crawl-content.d.ts.map