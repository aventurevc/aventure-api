// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployStatusSchema } from "./status.js";
import { DeployTargetSpecSchema } from "./target-spec.js";
const DeployTargetSchemaDefinition = z.object({
    /** Configured target identity */
    spec: DeployTargetSpecSchema,
    /** Live platform state for the target */
    status: DeployStatusSchema,
});
/**
 * Configured service/environment target managed by the deploy control plane
 *
 * @openapiSchema DeployTarget
 * @endpoint GET /v1/deploy/targets
 * @contractShape deploy.target
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export const DeployTargetSchema = DeployTargetSchemaDefinition;
//# sourceMappingURL=target.js.map