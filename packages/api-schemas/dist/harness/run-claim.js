// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunClaimSchemaDefinition = z.object({
    /** Claiming engine instance id */
    engineId: z.string(),
    /** Lease duration in seconds */
    leaseSeconds: z.number().int(),
    /** Per-model running-run admission cap */
    modelCap: z.int(),
});
/**
 * Engine lease claim request
 *
 * @openapiSchema HarnessRunClaim
 * @endpoint POST /v1/harness/control-plane/runs/claim
 * @contractShape harness.run-claim
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunClaimSchema = HarnessRunClaimSchemaDefinition;
//# sourceMappingURL=run-claim.js.map