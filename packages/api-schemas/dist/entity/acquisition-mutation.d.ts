import { z } from "zod/v4";
declare const EntityAcquisitionMutationSchemaDefinition: z.ZodObject<{
    acquirerEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    announcedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    asOf: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    completedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityAcquisitionMutationDefinition = z.infer<typeof EntityAcquisitionMutationSchemaDefinition>;
/**
 * Canonical acquisition write payload. Use with the entity acquisitions endpoint where the path entityId is the acquired company and acquirerEntityId is the buyer.
 *
 * @openapiSchema EntityAcquisitionMutation
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @contractShape entity.acquisition-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityAcquisition.kt
 */
export declare const EntityAcquisitionMutationSchema: z.ZodType<EntityAcquisitionMutationDefinition>;
export type EntityAcquisitionMutation = z.infer<typeof EntityAcquisitionMutationSchema>;
export {};
//# sourceMappingURL=acquisition-mutation.d.ts.map