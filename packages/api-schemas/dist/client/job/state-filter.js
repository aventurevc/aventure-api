import { z } from "zod/v4";
const jobStateFilterValues = [
    "PROCESSING,ENQUEUED,FAILED,SUCCEEDED,SCHEDULED,DELETED",
    "PROCESSING,ENQUEUED,FAILED",
    "PROCESSING",
    // "Queued" means pending execution: ENQUEUED (ready to run) plus SCHEDULED (waiting for its
    // future trigger). The console "Queued" card counts and filters this pair as one bucket.
    "ENQUEUED,SCHEDULED",
    "ENQUEUED",
    "FAILED",
    "SUCCEEDED",
];
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
export const JobStateFilterSchema = z.enum(jobStateFilterValues);
//# sourceMappingURL=state-filter.js.map