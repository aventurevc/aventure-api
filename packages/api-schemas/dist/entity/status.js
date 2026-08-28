// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Grouped entity visibility and editorial status flags
 *
 * @openapiSchema EntityStatus
 * @endpoint GET /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @contractShape entity.status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityStatus.kt
 */
export const EntityStatusSchema = z.object({
    /** Whether this entity is editorially featured */
    isFeatured: z.boolean(),
    /** Whether this entity is hidden from public list and detail views */
    isHidden: z.boolean(),
    /** Whether this entity has passed editorial verification */
    isVerified: z.boolean(),
    /** Whether this entity is included in the public sitemap */
    showOnSitemap: z.boolean(),
});
//# sourceMappingURL=status.js.map