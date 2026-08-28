// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Mutation fragment: person visibility update with create defaults
 *
 * @openapiSchema PersonVisibilityStatusMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonMutationSchema
 * @contractShape person.visibility-status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export const PersonVisibilityStatusMutationSchema = z.object({
    /** Set whether this person is hidden from public list and detail views. */
    isHidden: z.boolean().nullish(),
    /** Set whether this person is included in the public sitemap. */
    showOnSitemap: z.boolean().nullish(),
});
//# sourceMappingURL=visibility-status-mutation.js.map