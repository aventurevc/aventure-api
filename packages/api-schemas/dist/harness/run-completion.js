// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunCompletionStatusSchema } from "./run-completion-status.js";
const HarnessRunCompletionSchemaDefinition = z.object({
    /** Lease-owning harness engine instance id */
    engineId: z.string(),
    /** Produced entity slug */
    entitySlug: z.string().nullish(),
    /** Exact current lease generation returned by the latest successful claim or heartbeat */
    expectedLockedAt: z.iso.datetime({ offset: true }),
    /** Final loop iteration */
    iteration: z.int(),
    /** Latest enrich-loop status JSON string */
    latestStatus: z.string().nullish(),
    /** Warm-resume cache-window expiry, written with session_resume */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Claude SDK resume JSON string */
    sessionResume: z.string().nullish(),
    /** Terminal disposition */
    status: HarnessRunCompletionStatusSchema,
    /** Harness usage snapshot JSON string */
    usageSnapshot: z.string().nullish(),
});
/**
 * Finish a running harness run only while its exact current lease is owned
 *
 * @openapiSchema HarnessRunCompletion
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/complete
 * @contractShape harness.run-completion
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export const HarnessRunCompletionSchema = HarnessRunCompletionSchemaDefinition;
//# sourceMappingURL=run-completion.js.map