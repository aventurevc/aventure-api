import { z } from "zod/v4";
declare const DeployGuardSchemaDefinition: z.ZodObject<{
    active: z.ZodBoolean;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    operationId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type DeployGuardDefinition = z.infer<typeof DeployGuardSchemaDefinition>;
/**
 * Mutual-exclusion state of the deploy control plane
 *
 * @openapiSchema DeployGuard
 * @endpoint GET /v1/deploy/guard
 * @contractShape deploy.guard
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployGuardSchema: z.ZodType<DeployGuardDefinition>;
export type DeployGuard = z.infer<typeof DeployGuardSchema>;
export {};
//# sourceMappingURL=guard.d.ts.map