// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const DeployPairSourceTypeSchema = z.enum(["RunningOnStaging", "NewestStagingBuild"]);
//# sourceMappingURL=pair-source-type.js.map