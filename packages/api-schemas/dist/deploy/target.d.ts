import { z } from "zod/v4";
declare const DeployTargetSchemaDefinition: z.ZodObject<{
    spec: z.ZodType<{
        deployEnabled: boolean;
        disabledReason?: string | null | undefined;
        displayName: string;
        environment: string;
        imageRepository: string;
        mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
        name: string;
        promotionHold?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        deployEnabled: boolean;
        disabledReason?: string | null | undefined;
        displayName: string;
        environment: string;
        imageRepository: string;
        mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
        name: string;
        promotionHold?: string | null | undefined;
    }, unknown>>;
    status: z.ZodType<{
        currentImage?: string | null | undefined;
        currentSource?: string | null | undefined;
        currentStatus?: string | null | undefined;
        currentTag?: string | null | undefined;
        previousImage?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        currentImage?: string | null | undefined;
        currentSource?: string | null | undefined;
        currentStatus?: string | null | undefined;
        currentTag?: string | null | undefined;
        previousImage?: string | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type DeployTargetDefinition = z.infer<typeof DeployTargetSchemaDefinition>;
/**
 * Configured service/environment target managed by the deploy control plane
 *
 * @openapiSchema DeployTarget
 * @endpoint GET /v1/deploy/targets
 * @contractShape deploy.target
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployTargetSchema: z.ZodType<DeployTargetDefinition>;
export type DeployTarget = z.infer<typeof DeployTargetSchema>;
export {};
//# sourceMappingURL=target.d.ts.map