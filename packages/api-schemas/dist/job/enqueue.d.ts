import { z } from "zod/v4";
declare const JobEnqueueSchemaDefinition: z.ZodObject<{
    jobId: z.ZodUUID;
    mode: z.ZodString;
    statusUrl: z.ZodString;
}, z.core.$strip>;
type JobEnqueueDefinition = z.infer<typeof JobEnqueueSchemaDefinition>;
/**
 * Accepted asynchronous app job enqueue response.
 *
 * @openapiSchema JobEnqueue
 * @endpoint GET /v1/entities/detail/crawl-runs
 * @endpoint GET /v1/people/detail/crawl-runs
 * @endpoint POST /v1/chat/completions
 * @endpoint POST /v1/inference
 * @endpoint POST /v1/jobs/{jobKey}/run
 * @endpoint POST /v1/jobs/blog-post-ingest/runs
 * @endpoint POST /v1/jobs/blog-post-mention-sweep/runs
 * @endpoint POST /v1/jobs/crawl-runs/runs
 * @endpoint POST /v1/jobs/entities/duplicate-check
 * @endpoint POST /v1/jobs/entity-text-refresh-sweep/runs
 * @endpoint POST /v1/jobs/fundraise-reconciliation/entities/{entityId}/runs
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @endpoint POST /v1/jobs/news/duplicate-check
 * @endpoint POST /v1/jobs/people/duplicate-check
 * @endpoint POST /v1/jobs/rss-news-ingest/runs
 * @endpoint POST /v1/web/crawl
 * @endpoint PATCH /v1/entities/detail/crawl-runs
 * @endpoint PATCH /v1/people/detail/crawl-runs
 * @endpoint POST /admin/tools/addresses/refresh-view
 * @endpoint POST /admin/tools/entities/slug-backfill
 * @endpoint POST /admin/tools/entities/stage-backfill
 * @contractShape job.enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobEnqueue.kt
 */
export declare const JobEnqueueSchema: z.ZodType<JobEnqueueDefinition>;
export type JobEnqueue = z.infer<typeof JobEnqueueSchema>;
export {};
//# sourceMappingURL=enqueue.d.ts.map