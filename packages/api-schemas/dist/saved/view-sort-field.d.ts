import { z } from "zod/v4";
/**
 * Saved sort selection for a view
 *
 * @openapiSchema SavedViewSortField
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema SavedViewParamSchema
 * @contractShape saved.view-sort-field
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedview/SavedViewSortField.kt
 */
export declare const SavedViewSortFieldSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    label: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodString;
}, z.core.$strip>;
export type SavedViewSortField = z.infer<typeof SavedViewSortFieldSchema>;
//# sourceMappingURL=view-sort-field.d.ts.map