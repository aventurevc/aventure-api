// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AppJobRunStatusSchema } from "./job-run-status.js";
const AppJobRunSchemaDefinition = z.object({
    /** Run completion timestamp */
    completedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Terminal error message */
    errorMessage: z.string().nullish(),
    /** Fence token held by the active worker */
    fenceToken: z.number().int().nullish(),
    /** Stable app job key */
    jobKey: z.string(),
    /** Current JobRunr transport id */
    jobrunrJobId: z.uuid().nullish(),
    /** Instance that owns the active lease */
    leaseOwnerInstanceId: z.string().nullish(),
    /** Terminal outcome detail */
    outcome: z.string().nullish(),
    /** Request timestamp */
    requestedAt: z.iso.datetime({ offset: true }),
    /** Stable app-job run id */
    runId: z.uuid(),
    /** Canonical semantic key */
    semanticKey: z.string(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current run status */
    status: AppJobRunStatusSchema,
});
/**
 * Execution ledger row for an app job run
 *
 * @openapiSchema AppJobRun
 * @endpoint GET /v1/jobs/{jobKey}/runs
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema AppJobRunDetailSchema
 * @contractShape app.job-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJobRun.kt
 */
export const AppJobRunSchema = AppJobRunSchemaDefinition;
//# sourceMappingURL=job-run.js.map