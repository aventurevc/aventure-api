import { z } from "zod/v4";
declare const ClassificationReconcileEntitySchemaDefinition: z.ZodObject<{
    desiredJoin: z.ZodArray<z.ZodType<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown>>>;
    entityId: z.ZodUUID;
    expectedHash: z.ZodString;
}, z.core.$strip>;
type ClassificationReconcileEntityDefinition = z.infer<typeof ClassificationReconcileEntitySchemaDefinition>;
/**
 * Desired exact standardized classification join set for one entity. The server computes the delete/patch/create diff against the current set and applies it atomically. expectedHash must match the entity's current standardized set hash from the audit endpoint or the row is reported stale and left untouched.
 *
 * @openapiSchema ClassificationReconcileEntity
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileMutationSchema
 * @contractShape classification.reconcile-entity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationReconcileEntitySchema: z.ZodType<ClassificationReconcileEntityDefinition>;
export type ClassificationReconcileEntity = z.infer<typeof ClassificationReconcileEntitySchema>;
export {};
//# sourceMappingURL=reconcile-entity.d.ts.map