// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SavedViewParamSchema } from "./view-param.js";
const SavedViewMutationSchemaDefinition = z.object({
    description: z.string().max(255).nullish(),
    param: SavedViewParamSchema.nullish(),
    title: z.string().min(1).max(100).nullish(),
});
/**
 * Canonical saved-view mutation payload for create and update flows
 *
 * @openapiSchema SavedViewMutation
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @contractShape saved.view-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedview/SavedViewMutation.kt
 */
export const SavedViewMutationSchema = SavedViewMutationSchemaDefinition;
//# sourceMappingURL=view-mutation.js.map