import { z } from "zod/v4";
declare const DeployPairRevertMemberSchemaDefinition: z.ZodObject<{
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
    targetName: z.ZodString;
}, z.core.$strip>;
type DeployPairRevertMemberDefinition = z.infer<typeof DeployPairRevertMemberSchemaDefinition>;
/**
 * One member's result inside a pair revert
 *
 * @openapiSchema DeployPairRevertMember
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @usedBySchema DeployPairRevertSchema
 * @contractShape deploy.pair-revert-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairRevertMemberSchema: z.ZodType<DeployPairRevertMemberDefinition>;
export type DeployPairRevertMember = z.infer<typeof DeployPairRevertMemberSchema>;
export {};
//# sourceMappingURL=pair-revert-member.d.ts.map