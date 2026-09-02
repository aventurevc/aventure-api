import { z } from "zod/v4";
declare const DeployTagSchemaDefinition: z.ZodObject<{
    branch: z.ZodString;
    current: z.ZodBoolean;
    lastDeployedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    lastDeployOutcome: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Failure: "Failure";
        Submitted: "Submitted";
        Submitting: "Submitting";
        Success: "Success";
    }>>>;
    promotionEligible: z.ZodBoolean;
    pushedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    tag: z.ZodString;
    targetName: z.ZodString;
}, z.core.$strip>;
type DeployTagDefinition = z.infer<typeof DeployTagSchemaDefinition>;
/**
 * One Nexus image tag available for a deploy target
 *
 * @openapiSchema DeployTag
 * @endpoint GET /v1/deploy/targets/{targetName}/tags
 * @contractShape deploy.tag
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployTagSchema: z.ZodType<DeployTagDefinition>;
export type DeployTag = z.infer<typeof DeployTagSchema>;
export {};
//# sourceMappingURL=tag.d.ts.map