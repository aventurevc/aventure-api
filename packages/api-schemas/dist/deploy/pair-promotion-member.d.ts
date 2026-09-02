import { z } from "zod/v4";
declare const DeployPairPromotionMemberSchemaDefinition: z.ZodObject<{
    sourceImage: z.ZodString;
}, z.core.$strip>;
type DeployPairPromotionMemberDefinition = z.infer<typeof DeployPairPromotionMemberSchemaDefinition>;
/**
 * Exact immutable release image selection for one configured deploy-pair member
 *
 * @openapiSchema DeployPairPromotionMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @contractShape deploy.pair-promotion-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairPromotionMemberSchema: z.ZodType<DeployPairPromotionMemberDefinition>;
export type DeployPairPromotionMember = z.infer<typeof DeployPairPromotionMemberSchema>;
export {};
//# sourceMappingURL=pair-promotion-member.d.ts.map