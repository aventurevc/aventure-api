// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SavedListPersonMembershipSchemaDefinition = z.object({
    /** Person IDs included in the saved-list membership mutation */
    personId: z.array(z.uuid()).min(1).max(200),
});
/**
 * Canonical saved-list person membership payload.
 *
 * @openapiSchema SavedListPersonMembership
 * @endpoint POST /v1/app/saved-lists/{savedListId}/people
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/people
 * @contractShape saved.list-person-membership
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListPersonMembership.kt
 */
export const SavedListPersonMembershipSchema = SavedListPersonMembershipSchemaDefinition;
//# sourceMappingURL=list-person-membership.js.map