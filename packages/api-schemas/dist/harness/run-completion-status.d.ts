import { z } from "zod/v4";
/**
 * Successful or user-requested terminal disposition
 *
 * @openapiSchema HarnessRunCompletionStatus
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/complete
 * @usedBySchema HarnessRunCompletionSchema
 * @contractShape harness.run-completion-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export declare const HarnessRunCompletionStatusSchema: z.ZodEnum<{
    completed: "completed";
    stopped: "stopped";
}>;
export type HarnessRunCompletionStatus = z.infer<typeof HarnessRunCompletionStatusSchema>;
//# sourceMappingURL=run-completion-status.d.ts.map