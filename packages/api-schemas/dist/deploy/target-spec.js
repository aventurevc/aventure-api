// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployModeSchema } from "./mode.js";
const DeployTargetSpecSchemaDefinition = z.object({
    /** Whether the deploy action is enabled for this target */
    deployEnabled: z.boolean(),
    /** Reason deploy is disabled when deployEnabled is false */
    disabledReason: z.string().nullish(),
    /** Human-readable target name */
    displayName: z.string(),
    /** Environment label */
    environment: z.string(),
    /** Image repository under the Nexus registry */
    imageRepository: z.string(),
    /** Runtime platform source mode */
    mode: DeployModeSchema,
    /** Stable target key */
    name: z.string(),
    /** Operator hold that blocks promotions into this target while set; the value names the blocker. Targeted deploys and reverts stay available. */
    promotionHold: z.string().nullish(),
});
/**
 * Configured identity of a deploy target
 *
 * @openapiSchema DeployTargetSpec
 * @endpoint GET /v1/deploy/targets
 * @usedBySchema DeployTargetSchema
 * @contractShape deploy.target-spec
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export const DeployTargetSpecSchema = DeployTargetSpecSchemaDefinition;
//# sourceMappingURL=target-spec.js.map