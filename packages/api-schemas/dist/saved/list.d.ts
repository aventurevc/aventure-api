import { z } from "zod/v4";
declare const SavedListSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityCount: z.ZodInt;
    entityId: z.ZodArray<z.ZodUUID>;
    id: z.ZodInt;
    personCount: z.ZodInt;
    personId: z.ZodArray<z.ZodUUID>;
    title: z.ZodString;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type SavedListDefinition = z.infer<typeof SavedListSchemaDefinition>;
/**
 * Canonical saved-list resource with entity and person membership state.
 *
 * @openapiSchema SavedList
 * @endpoint GET /v1/app/saved-lists
 * @endpoint GET /v1/app/saved-lists/{savedListId}
 * @endpoint POST /v1/app/saved-lists
 * @endpoint POST /v1/app/saved-lists/{savedListId}/entities
 * @endpoint POST /v1/app/saved-lists/{savedListId}/people
 * @endpoint PATCH /v1/app/saved-lists/{savedListId}
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/entities
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/people
 * @contractShape saved.list
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedList.kt
 */
export declare const SavedListSchema: z.ZodType<SavedListDefinition>;
export type SavedList = z.infer<typeof SavedListSchema>;
export {};
//# sourceMappingURL=list.d.ts.map