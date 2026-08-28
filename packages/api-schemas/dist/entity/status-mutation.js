// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Entity mutation-side visibility fragment. On create, omitted status defaults to hidden from public list/detail reads, not featured, not verified, and omitted from the sitemap. On update, omitted nested fields leave existing flags unchanged.
 *
 * @openapiSchema EntityStatusMutation
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityMutationSchema
 * @contractShape entity.status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityStatus.kt
 */
export const EntityStatusMutationSchema = z.object({
    /** Set whether this entity is editorially featured */
    isFeatured: z.boolean().nullish(),
    /** Set whether this entity is hidden from public list and detail views. Create default is true when omitted. */
    isHidden: z.boolean().nullish(),
    /** Set whether this entity has passed editorial verification */
    isVerified: z.boolean().nullish(),
    /** Set whether this entity is included in the public sitemap. Create default is false when omitted. */
    showOnSitemap: z.boolean().nullish(),
});
//# sourceMappingURL=status-mutation.js.map