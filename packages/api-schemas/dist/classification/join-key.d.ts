import { z } from "zod/v4";
declare const ClassificationJoinKeySchemaDefinition: z.ZodObject<{
    isPrimary: z.ZodOptional<z.ZodBoolean>;
    standardizedClassificationId: z.ZodInt;
}, z.core.$strip>;
type ClassificationJoinKeyDefinition = z.infer<typeof ClassificationJoinKeySchemaDefinition>;
/**
 * One desired standardized classification join for an entity: the res_classification_ref registry id plus the primary flag inside that classification's category.
 *
 * @openapiSchema ClassificationJoinKey
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileEntitySchema
 * @usedBySchema ClassificationReconcilePlanSchema
 * @contractShape classification.join-key
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationJoinKeySchema: z.ZodType<ClassificationJoinKeyDefinition>;
export type ClassificationJoinKey = z.infer<typeof ClassificationJoinKeySchema>;
export {};
//# sourceMappingURL=join-key.d.ts.map