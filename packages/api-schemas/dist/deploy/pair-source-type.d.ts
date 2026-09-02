import { z } from "zod/v4";
/**
 * Source image selection mode for a configured deploy-pair promotion
 *
 * @openapiSchema DeployPairSourceType
 * @endpoint GET /v1/deploy/pairs
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @usedBySchema DeployPairSchema
 * @contractShape deploy.pair-source-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairSourceTypeSchema: z.ZodEnum<{
    NewestStagingBuild: "NewestStagingBuild";
    RunningOnStaging: "RunningOnStaging";
}>;
export type DeployPairSourceType = z.infer<typeof DeployPairSourceTypeSchema>;
//# sourceMappingURL=pair-source-type.d.ts.map