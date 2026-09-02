import { z } from "zod/v4";
declare const HarnessRunSchemaDefinition: z.ZodObject<{
    attempt: z.ZodInt;
    chainRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    createdAt: z.ZodISODateTime;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    environment: z.ZodEnum<{
        development: "development";
        production: "production";
        staging: "staging";
        unassigned: "unassigned";
    }>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    failureClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    hasSourceDocument: z.ZodBoolean;
    id: z.ZodUUID;
    idempotencyKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionPointer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iteration: z.ZodInt;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lockedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    lockedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxIteration: z.ZodInt;
    maxScoutConcurrent: z.ZodInt;
    mode: z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>;
    model: z.ZodString;
    nextAttemptAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceDocumentId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    startedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    status: z.ZodEnum<{
        completed: "completed";
        failed: "failed";
        queued: "queued";
        running: "running";
        stopped: "stopped";
    }>;
    subagentModel: z.ZodString;
    taskKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskPhase: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        FINAL: "FINAL";
        PRIMARY: "PRIMARY";
    }>>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    type: z.ZodEnum<{
        ENRICHMENT: "ENRICHMENT";
        TASK: "TASK";
    }>;
    updatedAt: z.ZodISODateTime;
    url: z.ZodString;
    usageSnapshot: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunDefinition = z.infer<typeof HarnessRunSchemaDefinition>;
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
export declare const HarnessRunSchema: z.ZodType<HarnessRunDefinition>;
export type HarnessRun = z.infer<typeof HarnessRunSchema>;
export {};
//# sourceMappingURL=run.d.ts.map