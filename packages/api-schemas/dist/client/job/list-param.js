import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
import { JobStateFilterSchema } from "./state-filter.js";
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
export const JobListParamSchema = PageParamSchema.extend({
    page: z.int().nonnegative(),
    size: z.int().positive(),
    states: JobStateFilterSchema,
});
//# sourceMappingURL=list-param.js.map