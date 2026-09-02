// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployEventSchema } from "./event.js";
const DeployPromotionMemberSchemaDefinition = z.object({
    /** Deploy target that received the promoted image */
    destinationTargetName: z.string(),
    /** Terminal deploy audit events returned for this member, deploy leg first, revert leg after when one ran; Submitted rows are persisted to the audit log but not returned here */
    event: z.array(DeployEventSchema),
    /** Image repository under the Nexus registry */
    imageRepository: z.string(),
    /** Immutable release tag the promotion started from */
    sourceTag: z.string(),
    /** Verified main-lane tags for this image: immutable only for a direct target promotion; immutable, version, and latest for a completed pair promotion */
    writtenTag: z.array(z.string()),
});
/**
 * One promoted image inside a promotion result
 *
 * @openapiSchema DeployPromotionMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @usedBySchema DeployPromotionSchema
 * @contractShape deploy.promotion-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPromotionMemberSchema = DeployPromotionMemberSchemaDefinition;
//# sourceMappingURL=promotion-member.js.map