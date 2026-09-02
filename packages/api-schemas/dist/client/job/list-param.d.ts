import { z } from "zod/v4";
/**
 * Request-side params for `GET /v1/jobs`.
 *
 * The canonical backend query parameter name is `states`, matching
 * `JobOverviewController.listJobs(...)`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the same GET /v1/jobs query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/jobs
 * @contractShape client.job-list-param
 * @contractRole canonical
 * @ownerModule client/job/list-param.ts
 */
export declare const JobListParamSchema: z.ZodObject<{
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    page: z.ZodInt;
    size: z.ZodInt;
    states: z.ZodEnum<{
        ENQUEUED: "ENQUEUED";
        "ENQUEUED,SCHEDULED": "ENQUEUED,SCHEDULED";
        FAILED: "FAILED";
        PROCESSING: "PROCESSING";
        "PROCESSING,ENQUEUED,FAILED": "PROCESSING,ENQUEUED,FAILED";
        "PROCESSING,ENQUEUED,FAILED,SUCCEEDED,SCHEDULED,DELETED": "PROCESSING,ENQUEUED,FAILED,SUCCEEDED,SCHEDULED,DELETED";
        SUCCEEDED: "SUCCEEDED";
    }>;
}, z.core.$strip>;
export type JobListParam = z.infer<typeof JobListParamSchema>;
//# sourceMappingURL=list-param.d.ts.map