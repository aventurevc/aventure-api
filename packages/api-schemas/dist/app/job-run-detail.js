// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AppJobClaimHistorySchema } from "./job-claim-history.js";
import { AppJobRunSchema } from "./job-run.js";
/**
 * Control-plane ledger detail for one app job run
 *
 * @openapiSchema AppJobRunDetail
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape app.job-run-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const AppJobRunDetailSchema = z.object({
    /** Chronological claim ownership events */
    claimHistory: z.array(AppJobClaimHistorySchema),
    /** Execution ledger row */
    run: AppJobRunSchema,
});
//# sourceMappingURL=job-run-detail.js.map