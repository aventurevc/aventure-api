// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Source used for the entity create logo.
 *
 * @openapiSchema EntityCreateLogoSource
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityCreateLogoSchema
 * @contractShape entity.create-logo-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreateLogo.kt
 */
export const EntityCreateLogoSourceSchema = z.enum([
    "AUTO_WEBSITE",
    "MANUAL_IMAGE_URL",
    "MANUAL_UPLOAD",
]);
//# sourceMappingURL=create-logo-source.js.map