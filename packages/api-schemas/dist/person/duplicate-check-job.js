// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { JobStateSchema } from "../job/state.js";
import { PersonDuplicateCheckResultSchema } from "./duplicate-check-result.js";
import { PersonDuplicateCriteriaSchema } from "./duplicate-criteria.js";
const PersonDuplicateCheckJobSchemaDefinition = z.object({
    /** Client correlation ID for request tracing */
    correlationId: z.string().nullish(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical duplicate-check criteria used for the job */
    criteria: PersonDuplicateCriteriaSchema,
    /** Failure reason if job failed */
    failureReason: z.string().nullish(),
    isTerminal: z.boolean(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Duplicate-check result payload */
    result: PersonDuplicateCheckResultSchema,
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Person duplicate-check job status snapshot
 *
 * @openapiSchema PersonDuplicateCheckJob
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @contractShape person.duplicate-check-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckJobSnapshot.kt
 */
export const PersonDuplicateCheckJobSchema = PersonDuplicateCheckJobSchemaDefinition;
//# sourceMappingURL=duplicate-check-job.js.map