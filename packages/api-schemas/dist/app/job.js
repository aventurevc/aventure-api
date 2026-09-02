// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AppJobSchemaDefinition = z.object({
    /** Instance currently holding the active claim */
    activeInstanceId: z.string().nullish(),
    /** Telemetry label for the instance currently holding the active claim */
    activeInstanceLabel: z.string().nullish(),
    /** Latest active run id */
    activeRunId: z.uuid().nullish(),
    /** Shared concurrency pool key */
    concurrencyPoolKey: z.string().nullish(),
    /** Effective config version captured by new runs */
    configVersion: z.int(),
    /** Whether this job can be requested through POST /v1/jobs/{jobKey}/run without a command payload */
    defaultRunEnabled: z.boolean(),
    /** Human-facing job name */
    displayName: z.string(),
    /** Whether DB effective config enables this job */
    enabled: z.boolean(),
    /** Execution scope */
    executionScope: z.enum(["SHARED_CLUSTER", "LOCAL_INSTANCE"]),
    /** Current claim fence token */
    fenceToken: z.number().int().nullish(),
    /** Current claim heartbeat time */
    heartbeatAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether this job can be invoked by API or recurring triggers */
    invocationEnabled: z.boolean(),
    /** Stable app job key */
    jobKey: z.string(),
    /** Last run completion time */
    lastCompletedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Last run id */
    lastRunId: z.uuid().nullish(),
    /** Most recent time JobRunr scheduled this recurring app job */
    lastScheduledAt: z.iso.datetime({ offset: true }).nullish(),
    /** Last run status */
    lastStatus: z
        .enum([
        "REQUESTED",
        "ENQUEUED",
        "RUNNING",
        "SUCCEEDED",
        "SKIPPED",
        "FAILED",
        "CANCELED",
        "FENCED_OUT",
    ])
        .nullish(),
    /** Current claim lease expiry */
    leaseUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Next time JobRunr will schedule this recurring app job */
    nextScheduledAt: z.iso.datetime({ offset: true }).nullish(),
    /** Definition retirement time; null when the app job remains active */
    retiredAt: z.iso.datetime({ offset: true }).nullish(),
    /** Configured schedule expression */
    scheduleExpression: z.string().nullish(),
    /** Schedule expression type */
    scheduleType: z.enum(["CRON", "DURATION", "NONE"]),
    /** Canonical semantic key or key pattern for this job */
    semanticKeyPattern: z.string(),
});
/**
 * App-owned background job
 *
 * @openapiSchema AppJob
 * @endpoint GET /v1/jobs
 * @endpoint GET /v1/jobs/{jobKey}
 * @endpoint PATCH /v1/jobs/{jobKey}
 * @contractShape app.job
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJob.kt
 */
export const AppJobSchema = AppJobSchemaDefinition;
//# sourceMappingURL=job.js.map