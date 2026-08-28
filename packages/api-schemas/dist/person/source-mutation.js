// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Mutation fragment: person source/workflow metadata
 *
 * @openapiSchema PersonSourceMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonMutationSchema
 * @contractShape person.source-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export const PersonSourceMutationSchema = z.object({
    /** Workflow status label stored on the person source metadata */
    workflowStatus: z.string().nullish(),
});
//# sourceMappingURL=source-mutation.js.map