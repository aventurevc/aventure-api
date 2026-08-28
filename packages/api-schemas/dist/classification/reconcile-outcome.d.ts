import { z } from "zod/v4";
declare const ClassificationReconcileOutcomeSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    plan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    }, z.core.$strip>>>;
    resultHash: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verified: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationReconcileOutcomeDefinition = z.infer<typeof ClassificationReconcileOutcomeSchemaDefinition>;
/**
 * Per-entity reconcile outcome: the computed (plan) or applied diff, the resulting set hash, and exact-set verification state.
 *
 * @openapiSchema ClassificationReconcileOutcome
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileSchema
 * @contractShape classification.reconcile-outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationReconcileOutcomeSchema: z.ZodType<ClassificationReconcileOutcomeDefinition>;
export type ClassificationReconcileOutcome = z.infer<typeof ClassificationReconcileOutcomeSchema>;
export {};
//# sourceMappingURL=reconcile-outcome.d.ts.map