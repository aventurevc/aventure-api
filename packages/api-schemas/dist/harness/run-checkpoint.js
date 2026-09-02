// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunCheckpointSchemaDefinition = z.object({
    /** Produced entity slug */
    entitySlug: z.string().nullish(),
    /** Manifest-pinned instruction documents JSON string */
    instructionPointer: z.string().nullish(),
    /** Current loop iteration */
    iteration: z.int().optional(),
    /** Latest enrich-loop status JSON string */
    latestStatus: z.string().nullish(),
    /** Warm-resume cache-window expiry, written with session_resume */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Claude SDK resume JSON string */
    sessionResume: z.string().nullish(),
    /** Harness usage snapshot JSON string */
    usageSnapshot: z.string().nullish(),
});
/**
 * Merge-patchable progress owned by the engine holding the exact current lease
 *
 * @openapiSchema HarnessRunCheckpoint
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}/checkpoint
 * @contractShape harness.run-checkpoint
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunCheckpointSchema = HarnessRunCheckpointSchemaDefinition;
//# sourceMappingURL=run-checkpoint.js.map