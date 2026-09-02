import { z } from "zod/v4";
declare const HarnessRunFailureSchemaDefinition: z.ZodObject<{
    chainRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    engineId: z.ZodString;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    error: z.ZodString;
    expectedLockedAt: z.ZodISODateTime;
    failureClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    instructionPointer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iteration: z.ZodInt;
    latestStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    resumeSafeUntil: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    sessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    successorSessionResume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    usageSnapshot: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunFailureDefinition = z.infer<typeof HarnessRunFailureSchemaDefinition>;
/**
 * Lease-guarded terminal failure
 *
 * @openapiSchema HarnessRunFailure
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/fail
 * @contractShape harness.run-failure
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export declare const HarnessRunFailureSchema: z.ZodType<HarnessRunFailureDefinition>;
export type HarnessRunFailure = z.infer<typeof HarnessRunFailureSchema>;
export {};
//# sourceMappingURL=run-failure.d.ts.map