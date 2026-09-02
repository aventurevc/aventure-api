// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterSchema } from "../entity/filter.js";
import { PersonFilterSchema } from "../person/filter.js";
import { SavedViewSortFieldSchema } from "./view-sort-field.js";
/**
 * Saved filter and presentation state for a view Owns the persisted query-state object used by saved views without falling back to loose JSON bags
 *
 * @openapiSchema SavedViewParam
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema SavedViewMutationSchema
 * @usedBySchema SavedViewSchema
 * @contractShape saved.view-param
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedview/SavedViewParam.kt
 */
export const SavedViewParamSchema = z.object({
    column: z.array(z.string()).max(200),
    columnWidth: z.array(z.int()).max(200),
    direction: z.string().nullish(),
    filter: EntityFilterSchema,
    orderBy: SavedViewSortFieldSchema.nullish(),
    page: z.int().nullish(),
    personFilter: PersonFilterSchema.nullish(),
    size: z.int().nullish(),
});
//# sourceMappingURL=view-param.js.map