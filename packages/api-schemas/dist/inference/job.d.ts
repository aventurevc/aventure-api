import { z } from "zod/v4";
declare const InferenceJobSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    jobId: z.ZodUUID;
    resultJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type InferenceJobDefinition = z.infer<typeof InferenceJobSchemaDefinition>;
/**
 * Async inference job status snapshot
 *
 * @openapiSchema InferenceJob
 * @endpoint GET /v1/inference/jobs/{jobId}
 * @contractShape inference.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/inference/InferenceJobSnapshot.kt
 */
export declare const InferenceJobSchema: z.ZodType<InferenceJobDefinition>;
export type InferenceJob = z.infer<typeof InferenceJobSchema>;
export {};
//# sourceMappingURL=job.d.ts.map