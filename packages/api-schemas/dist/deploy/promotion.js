// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployOutcomeSchema } from "./outcome.js";
import { DeployPromotionMemberSchema } from "./promotion-member.js";
const DeployPromotionSchemaDefinition = z.object({
    /** One result per deployed target, in configured deployment order */
    member: z.array(DeployPromotionMemberSchema),
    /** Masked failure summary when the promotion did not succeed */
    message: z.string().nullish(),
    /** Terminal outcome; Failure when any member failed validation */
    outcome: DeployOutcomeSchema,
    /** Whether every attempted member's previous provider image was restored */
    reverted: z.boolean(),
});
/**
 * Result of a promote-by-retag operation for one target or a configured pair
 *
 * @openapiSchema DeployPromotion
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @contractShape deploy.promotion
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPromotionSchema = DeployPromotionSchemaDefinition;
//# sourceMappingURL=promotion.js.map