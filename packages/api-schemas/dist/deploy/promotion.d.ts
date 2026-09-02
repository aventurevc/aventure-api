import { z } from "zod/v4";
declare const DeployPromotionSchemaDefinition: z.ZodObject<{
    member: z.ZodArray<z.ZodType<{
        destinationTargetName: string;
        event: {
            cursorDeploymentId?: string | null | undefined;
            cursorServiceVersion?: number | null | undefined;
            deploymentId?: string | null | undefined;
            desiredReplicas?: number | null | undefined;
            environment: string;
            eventId: string;
            fromImage?: string | null | undefined;
            fromRuntimeImageId?: string | null | undefined;
            id: number;
            message?: string | null | undefined;
            mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
            operationId?: string | null | undefined;
            outcome: "Failure" | "Submitted" | "Submitting" | "Success";
            phase: "Candidate" | "Compensation" | "PolicyBaseline";
            runtimeTaskEvidence: {
                latencyMillis: number;
                revision: string;
                statusCode: number;
                taskToken: string;
            }[];
            targetName: string;
            taskToken: string[];
            toImage: string;
            toRuntimeImageId?: string | null | undefined;
            triggeredAt: string;
            triggeredBy: string;
        }[];
        imageRepository: string;
        sourceTag: string;
        writtenTag: string[];
    }, unknown, z.core.$ZodTypeInternals<{
        destinationTargetName: string;
        event: {
            cursorDeploymentId?: string | null | undefined;
            cursorServiceVersion?: number | null | undefined;
            deploymentId?: string | null | undefined;
            desiredReplicas?: number | null | undefined;
            environment: string;
            eventId: string;
            fromImage?: string | null | undefined;
            fromRuntimeImageId?: string | null | undefined;
            id: number;
            message?: string | null | undefined;
            mode: "CoolifyApplicationImage" | "CoolifyComposeImage" | "DokployApplicationImage" | "RailwayImage" | "TagListOnly";
            operationId?: string | null | undefined;
            outcome: "Failure" | "Submitted" | "Submitting" | "Success";
            phase: "Candidate" | "Compensation" | "PolicyBaseline";
            runtimeTaskEvidence: {
                latencyMillis: number;
                revision: string;
                statusCode: number;
                taskToken: string;
            }[];
            targetName: string;
            taskToken: string[];
            toImage: string;
            toRuntimeImageId?: string | null | undefined;
            triggeredAt: string;
            triggeredBy: string;
        }[];
        imageRepository: string;
        sourceTag: string;
        writtenTag: string[];
    }, unknown>>>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodEnum<{
        Failure: "Failure";
        Submitted: "Submitted";
        Submitting: "Submitting";
        Success: "Success";
    }>;
    reverted: z.ZodBoolean;
}, z.core.$strip>;
type DeployPromotionDefinition = z.infer<typeof DeployPromotionSchemaDefinition>;
/**
 * Result of a promote-by-retag operation for one target or a configured pair
 *
 * @openapiSchema DeployPromotion
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @contractShape deploy.promotion
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPromotionSchema: z.ZodType<DeployPromotionDefinition>;
export type DeployPromotion = z.infer<typeof DeployPromotionSchema>;
export {};
//# sourceMappingURL=promotion.d.ts.map