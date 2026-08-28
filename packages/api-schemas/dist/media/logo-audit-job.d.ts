import { z } from "zod/v4";
declare const MediaLogoAuditJobSchemaDefinition: z.ZodObject<{
    checked: z.ZodInt;
    createdAt: z.ZodISODateTime;
    deleted: z.ZodInt;
    deleteMode: z.ZodString;
    dryRun: z.ZodBoolean;
    errors: z.ZodInt;
    failureReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    rejected: z.ZodInt;
    rejectMonogram: z.ZodBoolean;
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
type MediaLogoAuditJobDefinition = z.infer<typeof MediaLogoAuditJobSchemaDefinition>;
/**
 * Logo audit job status snapshot
 *
 * @openapiSchema MediaLogoAuditJob
 * @endpoint GET /v1/media/logo-audit/jobs
 * @endpoint GET /v1/media/logo-audit/jobs/{jobId}
 * @usedBySchema PageMediaLogoAuditJobSchema
 * @contractShape media.logo-audit-job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/LogoAuditRun.kt
 */
export declare const MediaLogoAuditJobSchema: z.ZodType<MediaLogoAuditJobDefinition>;
export type MediaLogoAuditJob = z.infer<typeof MediaLogoAuditJobSchema>;
export {};
//# sourceMappingURL=logo-audit-job.d.ts.map