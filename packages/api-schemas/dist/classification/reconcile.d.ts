import { z } from "zod/v4";
declare const ClassificationReconcileSchemaDefinition: z.ZodObject<{
    applied: z.ZodBoolean;
    failed: z.ZodArray<z.ZodType<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown>>>;
    stale: z.ZodArray<z.ZodType<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown>>>;
    succeeded: z.ZodArray<z.ZodType<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        entityId: string;
        message?: string | null | undefined;
        plan?: {
            create: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
            delete: number[];
            patch: {
                isPrimary?: boolean | undefined;
                standardizedClassificationId: number;
            }[];
        } | null | undefined;
        resultHash?: string | null | undefined;
        verified: boolean;
    }, unknown>>>;
}, z.core.$strip>;
type ClassificationReconcileDefinition = z.infer<typeof ClassificationReconcileSchemaDefinition>;
/**
 * Reconcile result. stale rows failed the expectedHash compare-and-swap and were left untouched; failed rows hit a validation or verification error and were rolled back.
 *
 * @openapiSchema ClassificationReconcile
 * @endpoint POST /v1/entities/classifications/reconcile
 * @contractShape classification.reconcile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export declare const ClassificationReconcileSchema: z.ZodType<ClassificationReconcileDefinition>;
export type ClassificationReconcile = z.infer<typeof ClassificationReconcileSchema>;
export {};
//# sourceMappingURL=reconcile.d.ts.map