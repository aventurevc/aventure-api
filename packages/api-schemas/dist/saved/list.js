// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SavedListSchemaDefinition = z.object({
    /** Saved list creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    description: z.string().max(255).nullish(),
    /** Entity count */
    entityCount: z.int(),
    /** Entity IDs included in the saved list */
    entityId: z.array(z.uuid()).max(200),
    /** Saved list ID */
    id: z.int(),
    /** Person count */
    personCount: z.int(),
    /** Person IDs included in the saved list */
    personId: z.array(z.uuid()).max(200),
    /** Title */
    title: z.string().min(1).max(100),
    /** Saved list update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Canonical saved-list resource with entity and person membership state.
 *
 * @openapiSchema SavedList
 * @endpoint GET /v1/app/saved-lists
 * @endpoint GET /v1/app/saved-lists/{savedListId}
 * @endpoint POST /v1/app/saved-lists
 * @endpoint POST /v1/app/saved-lists/{savedListId}/entities
 * @endpoint POST /v1/app/saved-lists/{savedListId}/people
 * @endpoint PATCH /v1/app/saved-lists/{savedListId}
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/entities
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/people
 * @contractShape saved.list
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedList.kt
 */
export const SavedListSchema = SavedListSchemaDefinition;
//# sourceMappingURL=list.js.map