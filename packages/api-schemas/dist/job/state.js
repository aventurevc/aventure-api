// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Shared lifecycle states for async jobs (duplicate-check, logo-audit, etc.)
 *
 * @openapiSchema JobState
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/media/logo-audit/jobs
 * @endpoint GET /v1/entities/detail/crawl-runs/jobs/{jobId}
 * @endpoint GET /v1/inference/jobs/{jobId}
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @endpoint GET /v1/media/logo-audit/jobs/{jobId}
 * @endpoint GET /v1/media/retrofit/jobs/{jobId}
 * @endpoint GET /v1/people/detail/crawl-runs/jobs/{jobId}
 * @endpoint GET /v1/web/crawl/jobs/{jobId}
 * @usedBySchema CrawlRunJobSchema
 * @usedBySchema EntityDuplicateCheckJobSchema
 * @usedBySchema InferenceJobSchema
 * @usedBySchema MediaLogoAuditJobSchema
 * @usedBySchema MediaRetrofitJobSchema
 * @usedBySchema NewsDuplicateCheckJobSchema
 * @usedBySchema PersonDuplicateCheckJobSchema
 * @usedBySchema WebCrawlJobSchema
 * @contractShape job.state
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobState.kt
 */
export const JobStateSchema = z.enum([
    "PENDING",
    "RUNNING",
    "COMPLETED",
    "FAILED",
    "CANCELED",
    "UNKNOWN",
]);
//# sourceMappingURL=state.js.map