// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const DeployModeSchema = z.enum([
    "RailwayImage",
    "CoolifyApplicationImage",
    "CoolifyComposeImage",
    "DokployApplicationImage",
    "TagListOnly",
]);
//# sourceMappingURL=mode.js.map