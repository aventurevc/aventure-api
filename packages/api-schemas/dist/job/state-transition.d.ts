import { z } from "zod/v4";
declare const JobStateTransitionSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    deleteReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionCauseMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionCauseType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    failureMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    latencyMillis: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    mustNotRetry: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    processMillis: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    scheduledAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    scheduleReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    serverId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    serverName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    state: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type JobStateTransitionDefinition = z.infer<typeof JobStateTransitionSchemaDefinition>;
/**
 * Background job state-history transition
 *
 * @openapiSchema JobStateTransition
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema JobDetailSchema
 * @contractShape job.state-transition
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobStateTransition.kt
 */
export declare const JobStateTransitionSchema: z.ZodType<JobStateTransitionDefinition>;
export type JobStateTransition = z.infer<typeof JobStateTransitionSchema>;
export {};
//# sourceMappingURL=state-transition.d.ts.map