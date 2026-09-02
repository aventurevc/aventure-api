import { z } from "zod/v4";
declare const AppJobInstanceSchemaDefinition: z.ZodObject<{
    applicationName: z.ZodString;
    bootId: z.ZodUUID;
    controlPlaneProtocolVersion: z.ZodInt;
    heartbeatAt: z.ZodISODateTime;
    instanceId: z.ZodString;
    instanceLabel: z.ZodString;
    leaseUntil: z.ZodISODateTime;
    startedAt: z.ZodISODateTime;
}, z.core.$strip>;
type AppJobInstanceDefinition = z.infer<typeof AppJobInstanceSchemaDefinition>;
/**
 * Live app-job participant
 *
 * @openapiSchema AppJobInstance
 * @endpoint GET /v1/jobs/instances
 * @contractShape app.job-instance
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJob.kt
 */
export declare const AppJobInstanceSchema: z.ZodType<AppJobInstanceDefinition>;
export type AppJobInstance = z.infer<typeof AppJobInstanceSchema>;
export {};
//# sourceMappingURL=job-instance.d.ts.map