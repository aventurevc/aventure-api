import { z } from "zod/v4";
import { HarnessRunStatusSchema } from "../../harness/run-status.js";
import { HarnessRunTypeSchema } from "../../harness/run-type.js";
import { PageParamSchema } from "../pagination/page-param.js";
/**
 * Request-side params for the admin-only `GET /v1/harness/control-plane/runs`.
 *
 * The canonical backend query parameter names are `status` (repeatable), `type`, `taskKey`
 * (repeatable), `page`, and `size`, matching `HarnessRunOverviewController.listRuns(...)`.
 * This endpoint has a fixed newest-first sort, so the shared `sort` param is omitted.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the same GET /v1/harness/control-plane/runs query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/harness/control-plane/runs
 * @contractShape client.harness-run-list-param
 * @contractRole canonical
 * @ownerModule client/harness/list-param.ts
 */
export const HarnessRunListParamSchema = PageParamSchema.omit({ sort: true }).extend({
    status: z.array(HarnessRunStatusSchema).optional(),
    type: HarnessRunTypeSchema.optional(),
    taskKey: z.array(z.string().trim().min(1)).optional(),
});
//# sourceMappingURL=list-param.js.map