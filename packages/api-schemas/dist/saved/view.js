// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SavedResourceFrontmatterSchema } from "./resource-frontmatter.js";
import { SavedViewParamSchema } from "./view-param.js";
const SavedViewSchemaDefinition = z.object({
    /** Saved view creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Frontmatter */
    frontmatter: SavedResourceFrontmatterSchema,
    /** Saved view ID */
    id: z.int(),
    /** Saved view filter and sort parameters */
    param: SavedViewParamSchema,
    /** Saved view update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Canonical saved-view resource owned by the authenticated app user.
 *
 * @openapiSchema SavedView
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema PageSavedViewSchema
 * @contractShape saved.view
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedview/SavedView.kt
 */
export const SavedViewSchema = SavedViewSchemaDefinition;
//# sourceMappingURL=view.js.map