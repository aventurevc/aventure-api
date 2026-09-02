import { z } from "zod/v4";
declare const HarnessRunClaimSchemaDefinition: z.ZodObject<{
    engineId: z.ZodString;
    leaseSeconds: z.ZodNumber;
    modelCap: z.ZodInt;
}, z.core.$strip>;
type HarnessRunClaimDefinition = z.infer<typeof HarnessRunClaimSchemaDefinition>;
/**
 * Engine lease claim request
 *
 * @openapiSchema HarnessRunClaim
 * @endpoint POST /v1/harness/control-plane/runs/claim
 * @contractShape harness.run-claim
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunClaimSchema: z.ZodType<HarnessRunClaimDefinition>;
export type HarnessRunClaim = z.infer<typeof HarnessRunClaimSchema>;
export {};
//# sourceMappingURL=run-claim.d.ts.map