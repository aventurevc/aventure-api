import { z } from "zod/v4";
/**
 * Server-computed diff from the entity's current standardized join set to the desired set: joins to delete, primary flags to patch, and joins to create.
 *
 * @openapiSchema ClassificationReconcilePlan
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileOutcomeSchema
 * @contractShape classification.reconcile-plan
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationReconcilePlanSchema: z.ZodObject<{
    create: z.ZodArray<z.ZodType<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown>>>;
    delete: z.ZodArray<z.ZodInt>;
    patch: z.ZodArray<z.ZodType<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown, z.core.$ZodTypeInternals<{
        isPrimary?: boolean | undefined;
        standardizedClassificationId: number;
    }, unknown>>>;
}, z.core.$strip>;
export type ClassificationReconcilePlan = z.infer<typeof ClassificationReconcilePlanSchema>;
//# sourceMappingURL=reconcile-plan.d.ts.map