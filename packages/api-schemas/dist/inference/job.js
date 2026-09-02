// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
const InferenceJobSchemaDefinition = z.object({
    /** Client correlation ID for request tracing */
    correlationId: z.string().nullish(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Failure reason if job failed */
    failureReason: z.string().nullish(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Raw provider response JSON when the job completed */
    resultJson: z.string().nullish(),
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Async inference job status snapshot
 *
 * @openapiSchema InferenceJob
 * @endpoint GET /v1/inference/jobs/{jobId}
 * @contractShape inference.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/inference/InferenceJobSnapshot.kt
 */
export const InferenceJobSchema = InferenceJobSchemaDefinition;
//# sourceMappingURL=job.js.map