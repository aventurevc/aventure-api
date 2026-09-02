// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DeployPairPromotionMemberSchemaDefinition = z.object({
    /** SHA-qualified staging, production-candidate, or retained main image; its configured repository identifies the pair member */
    sourceImage: z.string(),
});
/**
 * Exact immutable release image selection for one configured deploy-pair member
 *
 * @openapiSchema DeployPairPromotionMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @contractShape deploy.pair-promotion-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPairPromotionMemberSchema = DeployPairPromotionMemberSchemaDefinition;
//# sourceMappingURL=pair-promotion-member.js.map