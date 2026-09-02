import { z } from "zod/v4";
declare const HarnessRunCompletionSchemaDefinition: z.ZodObject<{
    engineId: z.ZodString;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expectedLockedAt: z.ZodISODateTime;
    iteration: z.ZodInt;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        completed: "completed";
        stopped: "stopped";
    }>;
    usageSnapshot: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunCompletionDefinition = z.infer<typeof HarnessRunCompletionSchemaDefinition>;
/**
 * Finish a running harness run only while its exact current lease is owned
 *
 * @openapiSchema HarnessRunCompletion
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/complete
 * @contractShape harness.run-completion
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export declare const HarnessRunCompletionSchema: z.ZodType<HarnessRunCompletionDefinition>;
export type HarnessRunCompletion = z.infer<typeof HarnessRunCompletionSchema>;
export {};
//# sourceMappingURL=run-completion.d.ts.map