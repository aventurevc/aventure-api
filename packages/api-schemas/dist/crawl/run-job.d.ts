import { z } from "zod/v4";
declare const CrawlRunJobSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type CrawlRunJobDefinition = z.infer<typeof CrawlRunJobSchemaDefinition>;
/**
 * Crawl-run job status snapshot.
 *
 * @openapiSchema CrawlRunJob
 * @endpoint GET /v1/entities/detail/crawl-runs/jobs/{jobId}
 * @endpoint GET /v1/people/detail/crawl-runs/jobs/{jobId}
 * @contractShape crawl.run-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/webcrawl/CrawlRunJob.kt
 */
export declare const CrawlRunJobSchema: z.ZodType<CrawlRunJobDefinition>;
export type CrawlRunJob = z.infer<typeof CrawlRunJobSchema>;
export {};
//# sourceMappingURL=run-job.d.ts.map