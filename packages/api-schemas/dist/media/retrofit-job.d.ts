import { z } from "zod/v4";
declare const MediaRetrofitJobSchemaDefinition: z.ZodObject<{
    checked: z.ZodInt;
    complete: z.ZodBoolean;
    createdAt: z.ZodISODateTime;
    dryRun: z.ZodBoolean;
    errors: z.ZodInt;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    processed: z.ZodInt;
    remediated: z.ZodInt;
    state: z.ZodEnum<{
        CANCELED: "CANCELED";
        COMPLETED: "COMPLETED";
        FAILED: "FAILED";
        PENDING: "PENDING";
        RUNNING: "RUNNING";
        UNKNOWN: "UNKNOWN";
    }>;
    targetDomain: z.ZodString;
    updatedAt: z.ZodISODateTime;
    variantsFailed: z.ZodInt;
    variantsGenerated: z.ZodInt;
    variantsSkipped: z.ZodInt;
}, z.core.$strip>;
type MediaRetrofitJobDefinition = z.infer<typeof MediaRetrofitJobSchemaDefinition>;
/**
 * Media retrofit batch status snapshot
 *
 * @openapiSchema MediaRetrofitJob
 * @endpoint GET /v1/media/retrofit/jobs/{jobId}
 * @contractShape media.retrofit-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/MediaRetrofitRun.kt
 */
export declare const MediaRetrofitJobSchema: z.ZodType<MediaRetrofitJobDefinition>;
export type MediaRetrofitJob = z.infer<typeof MediaRetrofitJobSchema>;
export {};
//# sourceMappingURL=retrofit-job.d.ts.map