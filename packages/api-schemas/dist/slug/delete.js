// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SlugDeleteSchemaDefinition = z.object({
    /** Applied delete mode: `soft` or `hard`. */
    deletedMode: z.string(),
    /** Slug affected by the delete operation. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    /** True only after hard delete. False after soft delete because the hidden row still reserves the slug. */
    slugReleased: z.boolean(),
});
/**
 * Delete confirmation for a slug-bearing resource. Soft delete hides the row and keeps the slug reserved. Hard delete removes the row and releases the slug for reuse.
 *
 * @openapiSchema SlugDelete
 * @endpoint DELETE /v1/entities/detail
 * @endpoint DELETE /v1/people/detail
 * @contractShape slug.delete
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/identity/SlugDelete.kt
 */
export const SlugDeleteSchema = SlugDeleteSchemaDefinition;
//# sourceMappingURL=delete.js.map