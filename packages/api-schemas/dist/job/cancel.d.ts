import { z } from "zod/v4";
declare const JobCancelSchemaDefinition: z.ZodObject<{
    canceled: z.ZodBoolean;
    jobId: z.ZodUUID;
}, z.core.$strip>;
type JobCancelDefinition = z.infer<typeof JobCancelSchemaDefinition>;
/**
 * Job cancel
 *
 * @openapiSchema JobCancel
 * @endpoint DELETE /v1/media/logo-audit/jobs/{jobId}
 * @endpoint DELETE /v1/media/retrofit/jobs/{jobId}
 * @contractShape job.cancel
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobCancel.kt
 */
export declare const JobCancelSchema: z.ZodType<JobCancelDefinition>;
export type JobCancel = z.infer<typeof JobCancelSchema>;
export {};
//# sourceMappingURL=cancel.d.ts.map