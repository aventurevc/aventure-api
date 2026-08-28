// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityCreateLogoSourceSchema } from "./create-logo-source.js";
import { MediaUploadSchema } from "../media/upload.js";
/**
 * Logo imported or attached during entity create, requiring agent audit.
 *
 * @openapiSchema EntityCreateLogo
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityCreateResultSchema
 * @contractShape entity.create-logo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreateLogo.kt
 */
export const EntityCreateLogoSchema = z.object({
    /** Managed R2/imgproxy image requiring agent audit */
    media: MediaUploadSchema,
    /** How create obtained the logo */
    source: EntityCreateLogoSourceSchema,
    /** Image URL recorded as logo provenance. For remote imports this is the source image URL; for manual uploads this is the managed CDN URL of the persisted upload. */
    sourceImageUrl: z.string(),
});
//# sourceMappingURL=create-logo.js.map