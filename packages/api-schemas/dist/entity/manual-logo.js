// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Manual entity logo source used instead of website auto-discovery.
 *
 * @openapiSchema EntityManualLogo
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.manual-logo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityFullMutation.kt
 */
export const EntityManualLogoSchema = z.object({
    /** HTTP image URL to import, or managed logo path to attach. */
    imageUrl: z.string(),
});
//# sourceMappingURL=manual-logo.js.map