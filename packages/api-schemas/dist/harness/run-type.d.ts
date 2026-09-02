import { z } from "zod/v4";
/**
 * Harness run kind: full enrichment loop or bounded micro-task
 *
 * @openapiSchema HarnessRunType
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
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.run-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunTypeSchema: z.ZodEnum<{
    ENRICHMENT: "ENRICHMENT";
    TASK: "TASK";
}>;
export type HarnessRunType = z.infer<typeof HarnessRunTypeSchema>;
//# sourceMappingURL=run-type.d.ts.map