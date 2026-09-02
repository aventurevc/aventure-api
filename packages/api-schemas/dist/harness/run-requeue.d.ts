import { z } from "zod/v4";
declare const HarnessRunRequeueSchemaDefinition: z.ZodObject<{
    attempt: z.ZodInt;
    engineId: z.ZodString;
    error: z.ZodString;
    expectedLockedAt: z.ZodISODateTime;
    nextAttemptAt: z.ZodISODateTime;
}, z.core.$strip>;
type HarnessRunRequeueDefinition = z.infer<typeof HarnessRunRequeueSchemaDefinition>;
/**
 * Re-queue a running run for a backoff retry
 *
 * @openapiSchema HarnessRunRequeue
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/requeue
 * @contractShape harness.run-requeue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export declare const HarnessRunRequeueSchema: z.ZodType<HarnessRunRequeueDefinition>;
export type HarnessRunRequeue = z.infer<typeof HarnessRunRequeueSchema>;
export {};
//# sourceMappingURL=run-requeue.d.ts.map