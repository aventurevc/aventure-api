import { z } from "zod/v4";
declare const ClassificationReconcileMutationSchemaDefinition: z.ZodObject<{
    apply: z.ZodOptional<z.ZodBoolean>;
    entity: z.ZodArray<z.ZodType<{
        desiredJoin: {
            isPrimary?: boolean | undefined;
            standardizedClassificationId: number;
        }[];
        entityId: string;
        expectedHash: string;
    }, unknown, z.core.$ZodTypeInternals<{
        desiredJoin: {
            isPrimary?: boolean | undefined;
            standardizedClassificationId: number;
        }[];
        entityId: string;
        expectedHash: string;
    }, unknown>>>;
}, z.core.$strip>;
type ClassificationReconcileMutationDefinition = z.infer<typeof ClassificationReconcileMutationSchemaDefinition>;
/**
 * Standardized classification reconcile request. Each entity row is applied in its own atomic transaction. apply=false (default) returns the computed plan without writing; apply=true deletes, patches, and creates joins to make the current set exactly equal the desired set, then verifies the final set before reporting success.
 *
 * @openapiSchema ClassificationReconcileMutation
 * @endpoint POST /v1/entities/classifications/reconcile
 * @contractShape classification.reconcile-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationReconcileMutationSchema: z.ZodType<ClassificationReconcileMutationDefinition>;
export type ClassificationReconcileMutation = z.infer<typeof ClassificationReconcileMutationSchema>;
export {};
//# sourceMappingURL=reconcile-mutation.d.ts.map