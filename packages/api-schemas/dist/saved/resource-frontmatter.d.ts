import { z } from "zod/v4";
declare const SavedResourceFrontmatterSchemaDefinition: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodString;
}, z.core.$strip>;
type SavedResourceFrontmatterDefinition = z.infer<typeof SavedResourceFrontmatterSchemaDefinition>;
/**
 * Saved resource frontmatter
 *
 * @openapiSchema SavedResourceFrontmatter
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-lists
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema SavedViewSchema
 * @contractShape saved.resource-frontmatter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/saved/SavedResourceFrontmatter.kt
 */
export declare const SavedResourceFrontmatterSchema: z.ZodType<SavedResourceFrontmatterDefinition>;
export type SavedResourceFrontmatter = z.infer<typeof SavedResourceFrontmatterSchema>;
export {};
//# sourceMappingURL=resource-frontmatter.d.ts.map