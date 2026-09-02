import { z } from "zod/v4";
declare const JobOverviewSchemaDefinition: z.ZodObject<{
    deleted: z.ZodInt;
    enqueued: z.ZodInt;
    failed: z.ZodInt;
    generatedAt: z.ZodISODateTime;
    jobType: z.ZodArray<z.ZodType<{
        displayName: string;
        enqueued: number;
        failed: number;
        jobType: string;
        processing: number;
        succeeded: number;
        totalActive: number;
    }, unknown, z.core.$ZodTypeInternals<{
        displayName: string;
        enqueued: number;
        failed: number;
        jobType: string;
        processing: number;
        succeeded: number;
        totalActive: number;
    }, unknown>>>;
    processing: z.ZodInt;
    processingPaused: z.ZodBoolean;
    scheduled: z.ZodInt;
    serverCount: z.ZodInt;
    serverRunning: z.ZodBoolean;
    succeeded: z.ZodInt;
    totalActive: z.ZodInt;
    totalTerminal: z.ZodInt;
}, z.core.$strip>;
type JobOverviewDefinition = z.infer<typeof JobOverviewSchemaDefinition>;
/**
 * Background job system overview and statistics
 *
 * @openapiSchema JobOverview
 * @endpoint GET /v1/jobs/overview
 * @endpoint POST /v1/jobs/overview
 * @contractShape job.overview
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobOverview.kt
 */
export declare const JobOverviewSchema: z.ZodType<JobOverviewDefinition>;
export type JobOverview = z.infer<typeof JobOverviewSchema>;
export {};
//# sourceMappingURL=overview.d.ts.map