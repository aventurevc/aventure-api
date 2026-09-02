import { z } from "zod/v4";
declare const SavedListPersonMembershipSchemaDefinition: z.ZodObject<{
    personId: z.ZodArray<z.ZodUUID>;
}, z.core.$strip>;
type SavedListPersonMembershipDefinition = z.infer<typeof SavedListPersonMembershipSchemaDefinition>;
/**
 * Canonical saved-list person membership payload.
 *
 * @openapiSchema SavedListPersonMembership
 * @endpoint POST /v1/app/saved-lists/{savedListId}/people
 * @endpoint DELETE /v1/app/saved-lists/{savedListId}/people
 * @contractShape saved.list-person-membership
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/savedlist/SavedListPersonMembership.kt
 */
export declare const SavedListPersonMembershipSchema: z.ZodType<SavedListPersonMembershipDefinition>;
export type SavedListPersonMembership = z.infer<typeof SavedListPersonMembershipSchema>;
export {};
//# sourceMappingURL=list-person-membership.d.ts.map