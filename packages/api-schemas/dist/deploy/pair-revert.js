// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployOutcomeSchema } from "./outcome.js";
import { DeployPairRevertMemberSchema } from "./pair-revert-member.js";
const DeployPairRevertSchemaDefinition = z.object({
    /** Member results in configured deploy order */
    member: z.array(DeployPairRevertMemberSchema),
    /** Masked failure summary when the revert did not succeed */
    message: z.string().nullish(),
    /** Terminal outcome; Failure when any member's revert did not succeed */
    outcome: DeployOutcomeSchema,
});
/**
 * Result of reverting a configured pair to its last shared deployed state
 *
 * @openapiSchema DeployPairRevert
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @contractShape deploy.pair-revert
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPairRevertSchema = DeployPairRevertSchemaDefinition;
//# sourceMappingURL=pair-revert.js.map