// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobCancelSchemaDefinition = z.object({
    canceled: z.boolean(),
    jobId: z.uuid(),
});
/**
 * Job cancel
 *
 * @openapiSchema JobCancel
 * @endpoint DELETE /v1/inference/jobs/{jobId}
 * @endpoint DELETE /v1/jobs/entities/duplicate-check/{jobId}
 * @endpoint DELETE /v1/jobs/news/duplicate-check/{jobId}
 * @endpoint DELETE /v1/jobs/people/duplicate-check/{jobId}
 * @endpoint DELETE /v1/media/logo-audit/jobs/{jobId}
 * @endpoint DELETE /v1/media/retrofit/jobs/{jobId}
 * @contractShape job.cancel
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobCancel.kt
 */
export const JobCancelSchema = JobCancelSchemaDefinition;
//# sourceMappingURL=cancel.js.map