import { z } from "zod/v4";
declare const DeployTargetSpecSchemaDefinition: z.ZodObject<{
    deployEnabled: z.ZodBoolean;
    disabledReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayName: z.ZodString;
    environment: z.ZodString;
    imageRepository: z.ZodString;
    mode: z.ZodEnum<{
        CoolifyApplicationImage: "CoolifyApplicationImage";
        CoolifyComposeImage: "CoolifyComposeImage";
        DokployApplicationImage: "DokployApplicationImage";
        RailwayImage: "RailwayImage";
        TagListOnly: "TagListOnly";
    }>;
    name: z.ZodString;
    promotionHold: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type DeployTargetSpecDefinition = z.infer<typeof DeployTargetSpecSchemaDefinition>;
/**
 * Configured identity of a deploy target
 *
 * @openapiSchema DeployTargetSpec
 * @endpoint GET /v1/deploy/targets
 * @usedBySchema DeployTargetSchema
 * @contractShape deploy.target-spec
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployTargetSpecSchema: z.ZodType<DeployTargetSpecDefinition>;
export type DeployTargetSpec = z.infer<typeof DeployTargetSpecSchema>;
export {};
//# sourceMappingURL=target-spec.d.ts.map