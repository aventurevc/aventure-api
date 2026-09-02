import { z } from "zod/v4";
declare const CrawlRunSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    domain: z.ZodString;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    render: z.ZodBoolean;
    url: z.ZodString;
}, z.core.$strip>;
type CrawlRunDefinition = z.infer<typeof CrawlRunSchemaDefinition>;
/**
 * Manual crawl-run app-job payload.
 *
 * @openapiSchema CrawlRun
 * @endpoint POST /v1/jobs/crawl-runs/runs
 * @contractShape crawl.run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/application/usecase/job/CrawlRun.kt
 */
export declare const CrawlRunSchema: z.ZodType<CrawlRunDefinition>;
export type CrawlRun = z.infer<typeof CrawlRunSchema>;
export {};
//# sourceMappingURL=run.d.ts.map