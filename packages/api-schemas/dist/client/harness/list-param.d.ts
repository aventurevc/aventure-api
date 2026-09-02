import { z } from "zod/v4";
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
export declare const HarnessRunListParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    status: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        completed: "completed";
        failed: "failed";
        queued: "queued";
        running: "running";
        stopped: "stopped";
    }>>>;
    type: z.ZodOptional<z.ZodEnum<{
        ENRICHMENT: "ENRICHMENT";
        TASK: "TASK";
    }>>;
    taskKey: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type HarnessRunListParam = z.infer<typeof HarnessRunListParamSchema>;
//# sourceMappingURL=list-param.d.ts.map