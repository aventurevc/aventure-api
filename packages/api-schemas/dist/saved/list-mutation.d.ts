import { z } from "zod/v4";
declare const SavedListMutationSchemaDefinition: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SavedListMutationDefinition = z.infer<typeof SavedListMutationSchemaDefinition>;
/**
 * Canonical saved-list mutation payload for RFC 7396 merge-patch updates.
 *
 * @openapiSchema SavedListMutation
 * @endpoint PATCH /v1/app/saved-lists/{savedListId}
 * @contractShape saved.list-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListMutation.kt
 */
export declare const SavedListMutationSchema: z.ZodType<SavedListMutationDefinition>;
export type SavedListMutation = z.infer<typeof SavedListMutationSchema>;
export {};
//# sourceMappingURL=list-mutation.d.ts.map