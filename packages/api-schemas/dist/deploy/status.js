// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DeployStatusSchemaDefinition = z.object({
    /** Full image reference currently configured on the platform */
    currentImage: z.string().nullish(),
    /** Provider source type, such as image, repo, or compose */
    currentSource: z.string().nullish(),
    /** Provider status when available */
    currentStatus: z.string().nullish(),
    /** Tag portion of the current image when available */
    currentTag: z.string().nullish(),
    /** Image that was running before the current image, resolved from the newest deploy audit event that deployed the current image; the image a revert would restore. Absent when the control plane never recorded a deploy of the current image or captured no prior image for it. */
    previousImage: z.string().nullish(),
});
/**
 * Live platform state for a deploy target
 *
 * @openapiSchema DeployStatus
 * @endpoint GET /v1/deploy/targets
 * @usedBySchema DeployTargetSchema
 * @contractShape deploy.status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export const DeployStatusSchema = DeployStatusSchemaDefinition;
//# sourceMappingURL=status.js.map