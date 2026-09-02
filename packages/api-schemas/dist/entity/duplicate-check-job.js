// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDuplicateCheckResultSchema } from "./duplicate-check-result.js";
import { EntityDuplicateCriteriaSchema } from "./duplicate-criteria.js";
import { JobStateSchema } from "../job/state.js";
const EntityDuplicateCheckJobSchemaDefinition = z.object({
    /** Client correlation ID for request tracing */
    correlationId: z.string().nullish(),
    /** Job creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical duplicate-check criteria used for the job */
    criteria: EntityDuplicateCriteriaSchema,
    /** Failure reason if job failed */
    failureReason: z.string().nullish(),
    isTerminal: z.boolean(),
    /** Unique job identifier */
    jobId: z.uuid(),
    /** Duplicate-check result payload */
    result: EntityDuplicateCheckResultSchema,
    /** Current job state */
    state: JobStateSchema,
    /** Job last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Entity duplicate-check job status snapshot
 *
 * @openapiSchema EntityDuplicateCheckJob
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @contractShape entity.duplicate-check-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckJobSnapshot.kt
 */
export const EntityDuplicateCheckJobSchema = EntityDuplicateCheckJobSchemaDefinition;
//# sourceMappingURL=duplicate-check-job.js.map