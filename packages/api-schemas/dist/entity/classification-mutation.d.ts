import { z } from "zod/v4";
declare const EntityClassificationMutationSchemaDefinition: z.ZodObject<{
    inactiveTagOverride: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        ATTACH_INACTIVE: "ATTACH_INACTIVE";
        REACTIVATE: "REACTIVATE";
    }>>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    standardizedClassificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    tagId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type EntityClassificationMutationDefinition = z.infer<typeof EntityClassificationMutationSchemaDefinition>;
/**
 * Create or update an entity classification. Use tagId for an existing tag, standardizedClassificationId for an existing standardized classification, or type and name for a creatable editorial value.
 *
 * @openapiSchema EntityClassificationMutation
 * @endpoint POST /v1/entities/{entityId}/classifications
 * @endpoint POST /v1/entities/detail/full
 * @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.classification-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
 */
export declare const EntityClassificationMutationSchema: z.ZodType<EntityClassificationMutationDefinition>;
export type EntityClassificationMutation = z.infer<typeof EntityClassificationMutationSchema>;
export {};
//# sourceMappingURL=classification-mutation.d.ts.map