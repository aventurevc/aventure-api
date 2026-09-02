import { z } from "zod/v4";
declare const JobLogLineSchemaDefinition: z.ZodObject<{
    level: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loggedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    message: z.ZodString;
}, z.core.$strip>;
type JobLogLineDefinition = z.infer<typeof JobLogLineSchemaDefinition>;
/**
 * JobRunr dashboard log entry
 *
 * @openapiSchema JobLogLine
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape job.log-line
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export declare const JobLogLineSchema: z.ZodType<JobLogLineDefinition>;
export type JobLogLine = z.infer<typeof JobLogLineSchema>;
export {};
//# sourceMappingURL=log-line.d.ts.map