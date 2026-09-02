// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
import { NewsDuplicateCheckResultSchema } from "./duplicate-check-result.js";
import { NewsDuplicateCheckSchema } from "./duplicate-check.js";
const NewsDuplicateCheckJobSchemaDefinition = z.object({
    /** Client correlation ID for request tracing */
    correlationId: z.string().nullish(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical duplicate-check criteria used for the job */
    criteria: NewsDuplicateCheckSchema,
    /** Failure reason if job failed */
    failureReason: z.string().nullish(),
    isTerminal: z.boolean(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Duplicate-check result payload */
    result: NewsDuplicateCheckResultSchema,
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * News duplicate-check job status snapshot
 *
 * @openapiSchema NewsDuplicateCheckJob
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @contractShape news.duplicate-check-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckJobSnapshot.kt
 */
export const NewsDuplicateCheckJobSchema = NewsDuplicateCheckJobSchemaDefinition;
//# sourceMappingURL=duplicate-check-job.js.map