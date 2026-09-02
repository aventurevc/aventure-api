import { z } from "zod/v4";
/**
 * Platform source shape used by a deploy target
 *
 * @openapiSchema DeployMode
 * @endpoint GET /v1/deploy/events
 * @endpoint GET /v1/deploy/targets
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @endpoint POST /v1/deploy/targets/{targetName}/deployments
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @endpoint POST /v1/deploy/targets/{targetName}/reverts
 * @usedBySchema DeployEventSchema
 * @usedBySchema DeployTargetSpecSchema
 * @contractShape deploy.mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployModeSchema: z.ZodEnum<{
    CoolifyApplicationImage: "CoolifyApplicationImage";
    CoolifyComposeImage: "CoolifyComposeImage";
    DokployApplicationImage: "DokployApplicationImage";
    RailwayImage: "RailwayImage";
    TagListOnly: "TagListOnly";
}>;
export type DeployMode = z.infer<typeof DeployModeSchema>;
//# sourceMappingURL=mode.d.ts.map