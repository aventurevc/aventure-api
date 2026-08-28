import { z } from "zod/v4";
/**
 * Request-side state presets for `GET /v1/jobs`.
 *
 * The backend accepts a comma-separated `states` query parameter and currently
 * documents the allowed JobRunr state combinations on the controller instead
 * of emitting a reusable OpenAPI component.
 *
 * @shared primitive:single reusable request-side state preset; not direct because GET /v1/jobs reuses the same comma-separated filter value across callers
 * @usedByEndpoint GET /v1/jobs
 * @contractShape client.job-state-filter
 * @contractRole canonical
 * @ownerModule client/job/state-filter.ts
 */
export declare const JobStateFilterSchema: z.ZodEnum<{
    ENQUEUED: "ENQUEUED";
    "ENQUEUED,SCHEDULED": "ENQUEUED,SCHEDULED";
    FAILED: "FAILED";
    PROCESSING: "PROCESSING";
    "PROCESSING,ENQUEUED,FAILED": "PROCESSING,ENQUEUED,FAILED";
    "PROCESSING,ENQUEUED,FAILED,SUCCEEDED,SCHEDULED,DELETED": "PROCESSING,ENQUEUED,FAILED,SUCCEEDED,SCHEDULED,DELETED";
    SUCCEEDED: "SUCCEEDED";
}>;
export type JobStateFilter = z.infer<typeof JobStateFilterSchema>;
//# sourceMappingURL=state-filter.d.ts.map