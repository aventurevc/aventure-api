import { z } from "zod/v4";
declare const AppJobClaimHistorySchemaDefinition: z.ZodObject<{
    claimAction: z.ZodString;
    claimedAt: z.ZodISODateTime;
    claimHistoryId: z.ZodNumber;
    fenceToken: z.ZodNumber;
    jobKey: z.ZodString;
    leaseOwnerBootId: z.ZodUUID;
    leaseOwnerInstanceId: z.ZodString;
    leaseUntil: z.ZodISODateTime;
    previousFenceToken: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    previousRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    runId: z.ZodUUID;
    semanticKey: z.ZodString;
}, z.core.$strip>;
type AppJobClaimHistoryDefinition = z.infer<typeof AppJobClaimHistorySchemaDefinition>;
/**
 * Claim ownership event for one app job run
 *
 * @openapiSchema AppJobClaimHistory
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema AppJobRunDetailSchema
 * @contractShape app.job-claim-history
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export declare const AppJobClaimHistorySchema: z.ZodType<AppJobClaimHistoryDefinition>;
export type AppJobClaimHistory = z.infer<typeof AppJobClaimHistorySchema>;
export {};
//# sourceMappingURL=job-claim-history.d.ts.map