// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const JobStateTransitionSchemaDefinition = z.object({
    /** Transition creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Deleted-state reason */
    deleteReason: z.string().nullish(),
    /** Failure cause exception message */
    exceptionCauseMessage: z.string().nullish(),
    /** Failure cause exception type */
    exceptionCauseType: z.string().nullish(),
    /** Failure exception message */
    exceptionMessage: z.string().nullish(),
    /** Failure exception type */
    exceptionType: z.string().nullish(),
    /** Failure-state message */
    failureMessage: z.string().nullish(),
    /** Succeeded-state queue latency in milliseconds */
    latencyMillis: z.number().int().nullish(),
    /** Whether JobRunr marked the failure as non-retryable */
    mustNotRetry: z.boolean().nullish(),
    /** Succeeded-state processing duration in milliseconds */
    processMillis: z.number().int().nullish(),
    /** Scheduled execution timestamp */
    scheduledAt: z.iso.datetime({ offset: true }).nullish(),
    /** Scheduled-state reason */
    scheduleReason: z.string().nullish(),
    /** Processing server identifier */
    serverId: z.uuid().nullish(),
    /** Processing server name */
    serverName: z.string().nullish(),
    /** State name */
    state: z.string(),
    /** Transition update timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Background job state-history transition
 *
 * @openapiSchema JobStateTransition
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape job.state-transition
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobStateTransition.kt
 */
export const JobStateTransitionSchema = JobStateTransitionSchemaDefinition;
//# sourceMappingURL=state-transition.js.map