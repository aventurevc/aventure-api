import { z } from "zod/v4";
declare const DeployPairRevertSchemaDefinition: z.ZodObject<{
    member: z.ZodArray<z.ZodType<{
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
        targetName: string;
    }, unknown, z.core.$ZodTypeInternals<{
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
        targetName: string;
    }, unknown>>>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodEnum<{
        Failure: "Failure";
        Submitted: "Submitted";
        Submitting: "Submitting";
        Success: "Success";
    }>;
}, z.core.$strip>;
type DeployPairRevertDefinition = z.infer<typeof DeployPairRevertSchemaDefinition>;
/**
 * Result of reverting a configured pair to its last shared deployed state
 *
 * @openapiSchema DeployPairRevert
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @contractShape deploy.pair-revert
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export declare const DeployPairRevertSchema: z.ZodType<DeployPairRevertDefinition>;
export type DeployPairRevert = z.infer<typeof DeployPairRevertSchema>;
export {};
//# sourceMappingURL=pair-revert.d.ts.map