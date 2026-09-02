// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SavedResourceFrontmatterSchemaDefinition = z.object({
    description: z.string().max(255).nullish(),
    /** Title */
    title: z.string().min(1).max(100),
});
/**
 * Saved resource frontmatter
 *
 * @openapiSchema SavedResourceFrontmatter
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-lists
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema SavedViewSchema
 * @contractShape saved.resource-frontmatter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/saved/SavedResourceFrontmatter.kt
 */
export const SavedResourceFrontmatterSchema = SavedResourceFrontmatterSchemaDefinition;
//# sourceMappingURL=resource-frontmatter.js.map