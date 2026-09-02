// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunRequeueSchemaDefinition = z.object({
    /** New attempt counter */
    attempt: z.int(),
    /** Lease-owning engine instance id */
    engineId: z.string(),
    /** Transient failure reason recorded for the retry */
    error: z.string(),
    /** Exact current lease generation returned by the latest successful claim or heartbeat */
    expectedLockedAt: z.iso.datetime({ offset: true }),
    /** Earliest next claim time */
    nextAttemptAt: z.iso.datetime({ offset: true }),
});
/**
 * Re-queue a running run for a backoff retry
 *
 * @openapiSchema HarnessRunRequeue
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/requeue
 * @contractShape harness.run-requeue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export const HarnessRunRequeueSchema = HarnessRunRequeueSchemaDefinition;
//# sourceMappingURL=run-requeue.js.map