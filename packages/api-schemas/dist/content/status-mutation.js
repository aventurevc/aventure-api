// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentStatusSchema } from "./status.js";
const ContentStatusMutationSchemaDefinition = z.object({
    /** New status */
    status: ContentStatusSchema,
});
/**
 * Shared content status mutation input
 *
 * @openapiSchema ContentStatusMutation
 * @endpoint PATCH /v1/app/blog/articles/{id}/status
 * @endpoint PATCH /v1/app/pages/{id}/status
 * @contractShape content.status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentStatusMutation.kt
 */
export const ContentStatusMutationSchema = ContentStatusMutationSchemaDefinition;
//# sourceMappingURL=status-mutation.js.map