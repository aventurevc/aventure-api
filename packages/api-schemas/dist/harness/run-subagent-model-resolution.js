// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunSubagentModelResolutionSchemaDefinition = z.object({
    /** Lease-owning harness engine instance id */
    engineId: z.string(),
    /** Exact current lease generation returned by the latest successful claim or heartbeat */
    expectedLockedAt: z.iso.datetime({ offset: true }),
    /** Compatible read-only research, cohort, and completion sub-agent model id */
    subagentModel: z.string(),
});
/**
 * Persist the compatible sub-agent model selected by a lease-owning engine
 *
 * @openapiSchema HarnessRunSubagentModelResolution
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/resolve-subagent-model
 * @contractShape harness.run-subagent-model-resolution
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunSubagentModelResolutionSchema = HarnessRunSubagentModelResolutionSchemaDefinition;
//# sourceMappingURL=run-subagent-model-resolution.js.map