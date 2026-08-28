import { z } from "zod/v4";
declare const LogoAccuracySchemaDefinition: z.ZodObject<{
    approval: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    candidateObserved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    confidence: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MEDIUM: "MEDIUM";
    }>;
    method: z.ZodEnum<{
        OPERATOR_REVIEW: "OPERATOR_REVIEW";
        PERCEPTUAL_HASH: "PERCEPTUAL_HASH";
        REFERENCE_UNAVAILABLE: "REFERENCE_UNAVAILABLE";
        VISION: "VISION";
    }>;
    outcome: z.ZodEnum<{
        INSUFFICIENT: "INSUFFICIENT";
        MATCH: "MATCH";
        MISMATCH: "MISMATCH";
    }>;
    reference: z.ZodArray<z.ZodType<{
        hammingDistance: number;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        hammingDistance: number;
        url: string;
    }, unknown>>>;
    referenceObserved: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sharedFeature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type LogoAccuracyDefinition = z.infer<typeof LogoAccuracySchemaDefinition>;
/**
 * Read-only assessment of whether a stored logo/photo depicts the target's own brand, decided from visible features of the stored mark versus the target's own reference marks
 *
 * @openapiSchema LogoAccuracy
 * @endpoint POST /v1/media/logo-accuracy
 * @contractShape logo.accuracy
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAccuracy.kt
 */
export declare const LogoAccuracySchema: z.ZodType<LogoAccuracyDefinition>;
export type LogoAccuracy = z.infer<typeof LogoAccuracySchema>;
export {};
//# sourceMappingURL=accuracy.d.ts.map