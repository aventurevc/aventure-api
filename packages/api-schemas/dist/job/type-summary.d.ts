import { z } from "zod/v4";
declare const JobTypeSummarySchemaDefinition: z.ZodObject<{
    displayName: z.ZodString;
    enqueued: z.ZodInt;
    failed: z.ZodInt;
    jobType: z.ZodString;
    processing: z.ZodInt;
    succeeded: z.ZodInt;
    totalActive: z.ZodInt;
}, z.core.$strip>;
type JobTypeSummaryDefinition = z.infer<typeof JobTypeSummarySchemaDefinition>;
/**
 * Statistics for a job type category
 *
 * @openapiSchema JobTypeSummary
 * @endpoint GET /v1/jobs/overview
 * @endpoint POST /v1/jobs/overview
 * @usedBySchema JobOverviewSchema
 * @contractShape job.type-summary
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobTypeSummary.kt
 */
export declare const JobTypeSummarySchema: z.ZodType<JobTypeSummaryDefinition>;
export type JobTypeSummary = z.infer<typeof JobTypeSummarySchema>;
export {};
//# sourceMappingURL=type-summary.d.ts.map