import { z } from "zod/v4";
declare const HarnessRunSubagentModelResolutionSchemaDefinition: z.ZodObject<{
    engineId: z.ZodString;
    expectedLockedAt: z.ZodISODateTime;
    subagentModel: z.ZodString;
}, z.core.$strip>;
type HarnessRunSubagentModelResolutionDefinition = z.infer<typeof HarnessRunSubagentModelResolutionSchemaDefinition>;
/**
 * Persist the compatible sub-agent model selected by a lease-owning engine
 *
 * @openapiSchema HarnessRunSubagentModelResolution
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/resolve-subagent-model
 * @contractShape harness.run-subagent-model-resolution
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunSubagentModelResolutionSchema: z.ZodType<HarnessRunSubagentModelResolutionDefinition>;
export type HarnessRunSubagentModelResolution = z.infer<typeof HarnessRunSubagentModelResolutionSchema>;
export {};
//# sourceMappingURL=run-subagent-model-resolution.d.ts.map