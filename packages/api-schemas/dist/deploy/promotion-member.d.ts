import { z } from "zod/v4";
declare const DeployPromotionMemberSchemaDefinition: z.ZodObject<{
    destinationTargetName: z.ZodString;
    event: z.ZodArray<z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>>;
    imageRepository: z.ZodString;
    sourceTag: z.ZodString;
    writtenTag: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type DeployPromotionMemberDefinition = z.infer<typeof DeployPromotionMemberSchemaDefinition>;
/**
 * One promoted image inside a promotion result
 *
 * @openapiSchema DeployPromotionMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @usedBySchema DeployPromotionSchema
 * @contractShape deploy.promotion-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPromotionMemberSchema: z.ZodType<DeployPromotionMemberDefinition>;
export type DeployPromotionMember = z.infer<typeof DeployPromotionMemberSchema>;
export {};
//# sourceMappingURL=promotion-member.d.ts.map