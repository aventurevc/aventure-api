// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployEventSchema } from "./event.js";
const DeployPairRevertMemberSchemaDefinition = z.object({
    /** Terminal deploy audit events for this member's revert leg; Submitted rows are persisted to the audit log but not returned here */
    event: z.array(DeployEventSchema),
    /** Production target this member reverted */
    targetName: z.string(),
});
/**
 * One member's result inside a pair revert
 *
 * @openapiSchema DeployPairRevertMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @usedBySchema DeployPairRevertSchema
 * @contractShape deploy.pair-revert-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPairRevertMemberSchema = DeployPairRevertMemberSchemaDefinition;
//# sourceMappingURL=pair-revert-member.js.map