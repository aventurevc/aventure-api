// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SavedListMembershipSchemaDefinition = z.object({
    /** Entity IDs included in the saved-list membership mutation */
    entityId: z.array(z.uuid()).min(1).max(200),
});
/**
 * Canonical saved-list membership payload.
 *
 * @openapiSchema SavedListMembership
 * @endpoint POST /v1/app/saved-lists/{savedListId}/entities
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/entities
 * @contractShape saved.list-membership
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListMembership.kt
 */
export const SavedListMembershipSchema = SavedListMembershipSchemaDefinition;
//# sourceMappingURL=list-membership.js.map