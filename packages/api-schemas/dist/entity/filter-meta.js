// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterUiMetaSchema } from "./filter-ui-meta.js";
/**
 * API response fragment for entity filter metadata
 *
 * @openapiSchema EntityFilterMeta
 * @endpoint GET /v1/entities/filters
 * @endpoint GET /v1/people/filters
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/people/filters
 * @usedBySchema EntityFilterEntrySchema
 * @contractShape entity.filter-meta
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/filter/entity/EntityFilterMetadata.kt
 */
export const EntityFilterMetaSchema = z.object({
    /** UI metadata for rendering entity filter controls */
    ui: EntityFilterUiMetaSchema.nullish(),
});
//# sourceMappingURL=filter-meta.js.map