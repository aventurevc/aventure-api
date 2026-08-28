import { z } from "zod/v4";
/**
 * Shared lifecycle states for async jobs (duplicate-check, logo-audit, etc.)
 *
 * @openapiSchema JobState
 * @endpoint GET /v1/media/logo-audit/jobs
 * @endpoint GET /v1/entities/detail/crawl-runs/jobs/{jobId}
 * @endpoint GET /v1/media/logo-audit/jobs/{jobId}
 * @endpoint GET /v1/media/retrofit/jobs/{jobId}
 * @endpoint GET /v1/people/detail/crawl-runs/jobs/{jobId}
 * @usedBySchema CrawlRunJobSchema
 * @usedBySchema MediaLogoAuditJobSchema
 * @usedBySchema MediaRetrofitJobSchema
 * @contractShape job.state
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobState.kt
 */
export declare const JobStateSchema: z.ZodEnum<{
    CANCELED: "CANCELED";
    COMPLETED: "COMPLETED";
    FAILED: "FAILED";
    PENDING: "PENDING";
    RUNNING: "RUNNING";
    UNKNOWN: "UNKNOWN";
}>;
export type JobState = z.infer<typeof JobStateSchema>;
//# sourceMappingURL=state.d.ts.map