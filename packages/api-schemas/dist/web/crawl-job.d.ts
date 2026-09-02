import { z } from "zod/v4";
declare const WebCrawlJobSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    page: z.ZodArray<z.ZodType<{
        crawledAt: string;
        link: {
            comparisonTarget?: string[] | null | undefined;
            kind?: string | null | undefined;
            label?: string | null | undefined;
            offDomain?: boolean | null | undefined;
            url: string;
        }[];
        markdown: string;
        statusCode?: number | null | undefined;
        title?: string | null | undefined;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        crawledAt: string;
        link: {
            comparisonTarget?: string[] | null | undefined;
            kind?: string | null | undefined;
            label?: string | null | undefined;
            offDomain?: boolean | null | undefined;
            url: string;
        }[];
        markdown: string;
        statusCode?: number | null | undefined;
        title?: string | null | undefined;
        url: string;
    }, unknown>>>;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    updatedAt: z.ZodISODateTime;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrawlJobDefinition = z.infer<typeof WebCrawlJobSchemaDefinition>;
/**
 * Async ephemeral crawl job status with transient per-page content.
 *
 * @openapiSchema WebCrawlJob
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @contractShape web.crawl-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrawlSnapshot.kt
 */
export declare const WebCrawlJobSchema: z.ZodType<WebCrawlJobDefinition>;
export type WebCrawlJob = z.infer<typeof WebCrawlJobSchema>;
export {};
//# sourceMappingURL=crawl-job.d.ts.map