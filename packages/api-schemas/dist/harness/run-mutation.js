// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunStatusSchema } from "./run-status.js";
const HarnessRunMutationSchemaDefinition = z.object({
    /** Produced entity slug */
    entitySlug: z.string().nullish(),
    /** Terminal failure reason */
    error: z.string().nullish(),
    /** Typed terminal-failure class from the harness retry classifier */
    failureClass: z.string().nullish(),
    /** Run completion timestamp */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Manifest-pinned instruction documents JSON string */
    instructionPointer: z.string().nullish(),
    /** Loop iteration */
    iteration: z.int().nullish(),
    /** Latest enrich-loop status JSON string */
    latestStatus: z.string().nullish(),
    /** Warm-resume cache-window expiry, written with session_resume */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Claude SDK resume JSON string */
    sessionResume: z.string().nullish(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** New lifecycle state */
    status: HarnessRunStatusSchema.nullish(),
    /** Harness usage snapshot JSON string */
    usageSnapshot: z.string().nullish(),
});
/**
 * Merge-patch field update for a harness run
 *
 * @openapiSchema HarnessRunMutation
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}
 * @contractShape harness.run-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunMutationSchema = HarnessRunMutationSchemaDefinition;
//# sourceMappingURL=run-mutation.js.map