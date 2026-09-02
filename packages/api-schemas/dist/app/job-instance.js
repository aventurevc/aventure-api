// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AppJobInstanceSchemaDefinition = z.object({
    /** Postgres application_name used by this JVM */
    applicationName: z.string(),
    /** Boot id for this JVM process */
    bootId: z.uuid(),
    /** App-job control-plane heartbeat protocol version */
    controlPlaneProtocolVersion: z.int(),
    /** Last heartbeat time */
    heartbeatAt: z.iso.datetime({ offset: true }),
    /** Stable instance id for this JVM */
    instanceId: z.string(),
    /** Telemetry label for this JVM */
    instanceLabel: z.string(),
    /** Current heartbeat lease expiry */
    leaseUntil: z.iso.datetime({ offset: true }),
    /** Instance start time */
    startedAt: z.iso.datetime({ offset: true }),
});
/**
 * Live app-job participant
 *
 * @openapiSchema AppJobInstance
 * @endpoint GET /v1/jobs/instances
 * @contractShape app.job-instance
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AppJob.kt
 */
export const AppJobInstanceSchema = AppJobInstanceSchemaDefinition;
//# sourceMappingURL=job-instance.js.map