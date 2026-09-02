// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Saved sort selection for a view
 *
 * @openapiSchema SavedViewSortField
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema SavedViewParamSchema
 * @contractShape saved.view-sort-field
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedview/SavedViewSortField.kt
 */
export const SavedViewSortFieldSchema = z.object({
    id: z.string().nullish(),
    label: z.string().nullish(),
    value: z.string(),
});
//# sourceMappingURL=view-sort-field.js.map