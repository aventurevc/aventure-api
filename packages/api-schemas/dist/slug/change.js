// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SlugChangeSchemaDefinition = z.object({
    /** New URL slug. Must be non-blank, normalized, and differ from the current slug. */
    newSlug: z.string().nullable(),
});
/**
 * Slug change merge-patch body
 *
 * @openapiSchema SlugChange
 * @endpoint PATCH /v1/app/blog/articles/{id}/slug
 * @endpoint PATCH /v1/app/pages/{id}/slug
 * @endpoint PATCH /v1/entities/{entityId}/slug
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/people/{personId}/slug
 * @contractShape slug.change
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugChange.kt
 */
export const SlugChangeSchema = SlugChangeSchemaDefinition;
//# sourceMappingURL=change.js.map