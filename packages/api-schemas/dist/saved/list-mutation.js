// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SavedListMutationSchemaDefinition = z.object({
    /** Optional saved-list description */
    description: z.string().max(255).nullish(),
    /** Optional saved-list title */
    title: z.string().min(1).max(100).nullish(),
});
/**
 * Canonical saved-list mutation payload for RFC 7396 merge-patch updates.
 *
 * @openapiSchema SavedListMutation
 * @endpoint PATCH /v1/app/saved-lists/{savedListId}
 * @contractShape saved.list-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListMutation.kt
 */
export const SavedListMutationSchema = SavedListMutationSchemaDefinition;
//# sourceMappingURL=list-mutation.js.map