import { z } from "zod/v4";
declare const EntityRelationshipMutationSchemaDefinition: z.ZodObject<{
    asOf: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    relationshipType: z.ZodString;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceEntityId: z.ZodUUID;
    targetEntityId: z.ZodUUID;
}, z.core.$strip>;
type EntityRelationshipMutationDefinition = z.infer<typeof EntityRelationshipMutationSchemaDefinition>;
/**
 * General non-acquisition relationship write payload. Acquisition relationships are rejected here and must use EntityAcquisitionMutation; parent relationships cannot coexist with acquisition rows for the same unordered entity pair. productService writes keep Product and Service records provider-scoped: do not delete or clear the current provider row unless another current provider row already exists; move the row to the new provider instead. Product/Service nameBrand must not exactly match the joined provider; use a descriptor/category such as Consumer Sedans or Light Industrial Vehicles for eponymous offerings without a distinct product-line brand. For affinity writes, sourceEntityId is the member organization and targetEntityId is the provider organization.
 *
 * @openapiSchema EntityRelationshipMutation
 * @endpoint POST /v1/entities/{entityId}/relationships
 * @endpoint PATCH /v1/entities/relationships/{relationshipId}
 * @contractShape entity.relationship-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityRelationship.kt
 */
export declare const EntityRelationshipMutationSchema: z.ZodType<EntityRelationshipMutationDefinition>;
export type EntityRelationshipMutation = z.infer<typeof EntityRelationshipMutationSchema>;
export {};
//# sourceMappingURL=relationship-mutation.d.ts.map