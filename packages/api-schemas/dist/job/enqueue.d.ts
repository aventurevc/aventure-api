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
 * @endpoint PATCH /v1/entities/detail/crawl-runs
 * @endpoint PATCH /v1/people/detail/crawl-runs
 * @contractShape job.enqueue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobEnqueue.kt
 */
export declare const JobEnqueueSchema: z.ZodType<JobEnqueueDefinition>;
export type JobEnqueue = z.infer<typeof JobEnqueueSchema>;
export {};
//# sourceMappingURL=enqueue.d.ts.map