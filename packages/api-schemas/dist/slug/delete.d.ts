import { z } from "zod/v4";
declare const SlugDeleteSchemaDefinition: z.ZodObject<{
    deletedMode: z.ZodString;
    slug: z.ZodString;
    slugReleased: z.ZodBoolean;
}, z.core.$strip>;
type SlugDeleteDefinition = z.infer<typeof SlugDeleteSchemaDefinition>;
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
export declare const SlugDeleteSchema: z.ZodType<SlugDeleteDefinition>;
export type SlugDelete = z.infer<typeof SlugDeleteSchema>;
export {};
//# sourceMappingURL=delete.d.ts.map