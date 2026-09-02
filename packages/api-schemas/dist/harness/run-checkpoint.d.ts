import { z } from "zod/v4";
declare const HarnessRunCheckpointSchemaDefinition: z.ZodObject<{
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionPointer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iteration: z.ZodOptional<z.ZodInt>;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    usageSnapshot: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunCheckpointDefinition = z.infer<typeof HarnessRunCheckpointSchemaDefinition>;
/**
 * Merge-patchable progress owned by the engine holding the exact current lease
 *
 * @openapiSchema HarnessRunCheckpoint
 * @endpoint PATCH /v1/harness/control-plane/runs/{runId}/checkpoint
 * @contractShape harness.run-checkpoint
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunCheckpointSchema: z.ZodType<HarnessRunCheckpointDefinition>;
export type HarnessRunCheckpoint = z.infer<typeof HarnessRunCheckpointSchema>;
export {};
//# sourceMappingURL=run-checkpoint.d.ts.map