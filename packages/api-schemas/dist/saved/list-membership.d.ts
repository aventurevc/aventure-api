import { z } from "zod/v4";
declare const SavedListMembershipSchemaDefinition: z.ZodObject<{
    entityId: z.ZodArray<z.ZodUUID>;
}, z.core.$strip>;
type SavedListMembershipDefinition = z.infer<typeof SavedListMembershipSchemaDefinition>;
/**
 * Canonical saved-list membership payload.
 *
 * @openapiSchema SavedListMembership
 * @endpoint POST /v1/app/saved-lists/{savedListId}/entities
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/entities
 * @contractShape saved.list-membership
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListMembership.kt
 */
export declare const SavedListMembershipSchema: z.ZodType<SavedListMembershipDefinition>;
export type SavedListMembership = z.infer<typeof SavedListMembershipSchema>;
export {};
//# sourceMappingURL=list-membership.d.ts.map