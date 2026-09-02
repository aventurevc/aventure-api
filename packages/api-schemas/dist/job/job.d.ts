import { z } from "zod/v4";
declare const JobSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    jobName: z.ZodString;
    jobType: z.ZodString;
    state: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type JobDefinition = z.infer<typeof JobSchemaDefinition>;
/**
 * Background job list item
 *
 * @openapiSchema Job
 * @endpoint GET /v1/jobs/runs
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}/status
 * @endpoint POST /v1/jobs/runs/{jobId}/requeue
 * @endpoint DELETE /v1/jobs/runs/{jobId}
 * @usedBySchema PageJobSchema
 * @contractShape job.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/Job.kt
 */
export declare const JobSchema: z.ZodType<JobDefinition>;
export type Job = z.infer<typeof JobSchema>;
export {};
//# sourceMappingURL=job.d.ts.map