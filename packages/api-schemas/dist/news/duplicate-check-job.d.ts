import { z } from "zod/v4";
declare const NewsDuplicateCheckJobSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodISODateTime;
    criteria: z.ZodType<{
        excludeId?: number | null | undefined;
        externalId?: string | null | undefined;
        publication?: string | null | undefined;
        qwen4bFp16Embedding?: number[] | null | undefined;
        search?: string | null | undefined;
        slug?: string | null | undefined;
        title?: string | null | undefined;
        url?: string | null | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        excludeId?: number | null | undefined;
        externalId?: string | null | undefined;
        publication?: string | null | undefined;
        qwen4bFp16Embedding?: number[] | null | undefined;
        search?: string | null | undefined;
        slug?: string | null | undefined;
        title?: string | null | undefined;
        url?: string | null | undefined;
        urlDomain?: string | null | undefined;
        urlMatchMode?: "domain" | "hostPath" | null | undefined;
    }, unknown>>;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isTerminal: z.ZodBoolean;
    jobId: z.ZodUUID;
    result: z.ZodType<{
        matchedNewsId: number[];
        totalMatches: number;
    }, unknown, z.core.$ZodTypeInternals<{
        matchedNewsId: number[];
        totalMatches: number;
    }, unknown>>;
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
type NewsDuplicateCheckJobDefinition = z.infer<typeof NewsDuplicateCheckJobSchemaDefinition>;
/**
 * News duplicate-check job status snapshot
 *
 * @openapiSchema NewsDuplicateCheckJob
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @contractShape news.duplicate-check-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckJobSnapshot.kt
 */
export declare const NewsDuplicateCheckJobSchema: z.ZodType<NewsDuplicateCheckJobDefinition>;
export type NewsDuplicateCheckJob = z.infer<typeof NewsDuplicateCheckJobSchema>;
export {};
//# sourceMappingURL=duplicate-check-job.d.ts.map