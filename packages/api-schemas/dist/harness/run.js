// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskPresetPhaseSchema } from "../agent/task-preset-phase.js";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
import { HarnessRunEnvironmentSchema } from "./run-environment.js";
import { HarnessRunStatusSchema } from "./run-status.js";
import { HarnessRunTypeSchema } from "./run-type.js";
const HarnessRunSchemaDefinition = z.object({
    /** Retry attempt counter */
    attempt: z.int(),
    /** First run id of this escalation or restart chain */
    chainRunId: z.uuid().nullish(),
    /** Creation timestamp */
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical slug of the entity the run produced */
    entitySlug: z.string().nullish(),
    /** API environment */
    environment: HarnessRunEnvironmentSchema,
    /** Terminal failure reason, when failed */
    error: z.string().nullish(),
    /** Typed terminal-failure class from the harness retry classifier (e.g. runtime_cap, escalated, provider_capacity, context_overflow); null unless failed */
    failureClass: z.string().nullish(),
    /** Run completion timestamp */
    finishedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Whether this run consumes an immutable private source document */
    hasSourceDocument: z.boolean(),
    /** Run id */
    id: z.uuid(),
    /** Durable create-or-get identity for an internal source-backed run */
    idempotencyKey: z.string().nullish(),
    /** Manifest-pinned instructions loaded by the run as opaque JSON */
    instructionPointer: z.string().nullish(),
    /** Current loop iteration */
    iteration: z.int(),
    /** Latest enrich-loop status as an opaque JSON string */
    latestStatus: z.string().nullish(),
    /** Lease refresh timestamp */
    lockedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Engine instance holding the active lease */
    lockedBy: z.string().nullish(),
    /** Loop iteration cap */
    maxIteration: z.int(),
    /** Parallel read-only scout fan-out width N */
    maxScoutConcurrent: z.int(),
    /** Enrichment breadth selected for this run */
    mode: EnrichmentModeSchema,
    /** Orchestrator model id */
    model: z.string(),
    /** Earliest re-claim time when waiting on retry backoff */
    nextAttemptAt: z.iso.datetime({ offset: true }).nullish(),
    /** Authenticated principal owning this run; null for admin runs */
    ownerUserId: z.string().nullish(),
    /** Instant past which a warm resume is no longer guaranteed; the harness writes it with session_resume from the model's cache window. Warm-resumable now iff failed/stopped and this is in the future. Null when there is no resume window. */
    resumeSafeUntil: z.iso.datetime({ offset: true }).nullish(),
    /** Claude SDK detach state for resume, as an opaque JSON string */
    sessionResume: z.string().nullish(),
    /** Immutable source document consumed by this run */
    sourceDocumentId: z.uuid().nullish(),
    /** Run start timestamp */
    startedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Current lifecycle state */
    status: HarnessRunStatusSchema,
    /** Read-only research, cohort, and completion sub-agent model id */
    subagentModel: z.string(),
    /** Micro-task key; null denotes a full enrichment run */
    taskKey: z.string().nullish(),
    /** Catalog-derived phase used for source-backed queue readiness */
    taskPhase: AgentTaskPresetPhaseSchema.nullish(),
    /** Selected task preset keys filed with the run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Run kind derived from task-key presence: ENRICHMENT for a client-submitted comprehensive or preset-scoped run, TASK for a platform-scheduled micro-task execution */
    type: HarnessRunTypeSchema,
    /** Last update timestamp */
    updatedAt: z.iso.datetime({ offset: true }),
    /** Company URL under enrichment */
    url: z.string(),
    /** Harness-owned usage snapshot as opaque JSON */
    usageSnapshot: z.string().nullish(),
    /** Optional steering prompt filed with the run */
    userPrompt: z.string().nullish(),
});
/**
 * One harness enrichment run
 *
 * @openapiSchema HarnessRun
 * @endpoint GET /v1/harness/control-plane/runs
 * @endpoint GET /v1/harness/control-plane/runs/usage-recovery-candidates
 * @endpoint GET /v1/harness/runs
 * @endpoint GET /v1/harness/control-plane/runs/{runId}
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/harness/control-plane/runs
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/complete
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/fail
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/heartbeat
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/release
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/requeue
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/resolve-subagent-model
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/restart
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/resume
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/resume-accept
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/stop
 * @endpoint POST /v1/harness/control-plane/runs/claim
 * @endpoint POST /v1/harness/runs/{runId}/restart
 * @endpoint POST /v1/harness/runs/{runId}/resume
 * @endpoint POST /v1/harness/runs/{runId}/stop
 * @endpoint POST /v1/harness/runs/submissions
 * @endpoint POST /v1/research/source-documents/client-captured-source/{documentId}/dispatch
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}/checkpoint
 * @usedBySchema CursorSliceHarnessRunSchema
 * @usedBySchema HarnessRunDetailSchema
 * @usedBySchema PageHarnessRunSchema
 * @contractShape harness.run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunSchema = HarnessRunSchemaDefinition;
//# sourceMappingURL=run.js.map