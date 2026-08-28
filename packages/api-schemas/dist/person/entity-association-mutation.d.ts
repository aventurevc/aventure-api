import { z } from "zod/v4";
declare const PersonEntityAssociationMutationSchemaDefinition: z.ZodObject<{
    corporateTitleId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    jobLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    personTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type PersonEntityAssociationMutationDefinition = z.infer<typeof PersonEntityAssociationMutationSchemaDefinition>;
/**
 * Mutation body for joining or updating a person-entity association.
 *
 * @openapiSchema PersonEntityAssociationMutation
 * @endpoint POST /v1/entities/{entityId}/people
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/entities/{entityId}/people/{associationId}
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @contractShape person.entity-association-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entitypersonassociation/EntityPersonAssociation.kt
 */
export declare const PersonEntityAssociationMutationSchema: z.ZodType<PersonEntityAssociationMutationDefinition>;
export type PersonEntityAssociationMutation = z.infer<typeof PersonEntityAssociationMutationSchema>;
export {};
//# sourceMappingURL=entity-association-mutation.d.ts.map