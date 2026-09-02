// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunFailureSchemaDefinition = z.object({
    /** Chain root run id the escalation successor inherits; the engine carries the original root here alongside successorSessionResume so the persisted chain_run_id stays rooted at the first run even when the failed run's own row predates the chain-root column. Accepted only with failureClass=escalated. */
    chainRunId: z.uuid().nullish(),
    /** Lease-owning engine instance id */
    engineId: z.string(),
    /** Produced entity slug */
    entitySlug: z.string().nullish(),
    /** Terminal failure reason */
    error: z.string(),
    /** Exact current lease generation returned by the latest successful claim or heartbeat */
    expectedLockedAt: z.iso.datetime({ offset: true }),
    /** Typed terminal-failure class from the harness retry classifier */
    failureClass: z.string().nullish(),
    /** Manifest-pinned instruction documents JSON string */
    instructionPointer: z.string().nullish(),
    /** Final loop iteration */
    iteration: z.int(),
    /** Latest enrich-loop status JSON string */
    latestStatus: z.string().nullish(),
    /** Warm-resume cache-window expiry, written with session_resume */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Claude SDK resume JSON string */
    sessionResume: z.string().nullish(),
    /** Harness-normalized opaque resume JSON for an ordinary micro-task successor; accepted only with failureClass=escalated and never on source-backed runs */
    successorSessionResume: z.string().nullish(),
    /** Harness usage snapshot JSON string */
    usageSnapshot: z.string().nullish(),
});
/**
 * Lease-guarded terminal failure
 *
 * @openapiSchema HarnessRunFailure
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/fail
 * @contractShape harness.run-failure
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export const HarnessRunFailureSchema = HarnessRunFailureSchemaDefinition;
//# sourceMappingURL=run-failure.js.map