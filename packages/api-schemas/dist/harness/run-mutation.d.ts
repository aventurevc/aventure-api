import { z } from "zod/v4";
declare const HarnessRunMutationSchemaDefinition: z.ZodObject<{
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    failureClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    instructionPointer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iteration: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        completed: "completed";
        failed: "failed";
        queued: "queued";
        running: "running";
        stopped: "stopped";
    }>>>;
    usageSnapshot: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunMutationDefinition = z.infer<typeof HarnessRunMutationSchemaDefinition>;
/**
 * Merge-patch field update for a harness run
 *
 * @openapiSchema HarnessRunMutation
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}
 * @contractShape harness.run-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunMutationSchema: z.ZodType<HarnessRunMutationDefinition>;
export type HarnessRunMutation = z.infer<typeof HarnessRunMutationSchema>;
export {};
//# sourceMappingURL=run-mutation.d.ts.map