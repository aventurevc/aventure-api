// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployOutcomeSchema } from "./outcome.js";
const DeployTagSchemaDefinition = z.object({
    /** Build lane parsed from the tag prefix — the branch the image was built from */
    branch: z.string(),
    /** Whether this tag matches the target's current platform image */
    current: z.boolean(),
    /** When the most recent control-plane deploy of this image was attempted */
    lastDeployedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Outcome of the most recent control-plane deploy of this image to this target; absent when the image was never deployed through the control plane. Submitted means the provider accepted the deploy without a waited terminal status. */
    lastDeployOutcome: DeployOutcomeSchema.nullish(),
    /** Whether this immutable staging tag can be promoted to main-lane tags */
    promotionEligible: z.boolean(),
    /** When the image manifest was last pushed to the registry; absent when the registry reports no timestamp */
    pushedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Raw Nexus Docker image tag */
    tag: z.string(),
    /** Target this tag belongs to */
    targetName: z.string(),
});
/**
 * One Nexus image tag available for a deploy target
 *
 * @openapiSchema DeployTag
 * @endpoint GET /v1/deploy/targets/{targetName}/tags
 * @contractShape deploy.tag
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export const DeployTagSchema = DeployTagSchemaDefinition;
//# sourceMappingURL=tag.js.map