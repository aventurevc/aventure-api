import { z } from "zod/v4";
declare const DeployEventSchemaDefinition: z.ZodObject<{
    cursorDeploymentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cursorServiceVersion: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    deploymentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    desiredReplicas: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    environment: z.ZodString;
    eventId: z.ZodUUID;
    fromImage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fromRuntimeImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodNumber;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mode: z.ZodEnum<{
        CoolifyApplicationImage: "CoolifyApplicationImage";
        CoolifyComposeImage: "CoolifyComposeImage";
        DokployApplicationImage: "DokployApplicationImage";
        RailwayImage: "RailwayImage";
        TagListOnly: "TagListOnly";
    }>;
    operationId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    outcome: z.ZodEnum<{
        Failure: "Failure";
        Submitted: "Submitted";
        Submitting: "Submitting";
        Success: "Success";
    }>;
    phase: z.ZodEnum<{
        Candidate: "Candidate";
        Compensation: "Compensation";
        PolicyBaseline: "PolicyBaseline";
    }>;
    runtimeTaskEvidence: z.ZodArray<z.ZodType<{
        latencyMillis: number;
        revision: string;
        statusCode: number;
        taskToken: string;
    }, unknown, z.core.$ZodTypeInternals<{
        latencyMillis: number;
        revision: string;
        statusCode: number;
        taskToken: string;
    }, unknown>>>;
    targetName: z.ZodString;
    taskToken: z.ZodArray<z.ZodString>;
    toImage: z.ZodString;
    toRuntimeImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    triggeredAt: z.ZodISODateTime;
    triggeredBy: z.ZodString;
}, z.core.$strip>;
type DeployEventDefinition = z.infer<typeof DeployEventSchemaDefinition>;
/**
 * Audited deploy control-plane event
 *
 * @openapiSchema DeployEvent
 * @endpoint GET /v1/deploy/events
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @endpoint POST /v1/deploy/targets/{targetName}/deployments
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @endpoint POST /v1/deploy/targets/{targetName}/reverts
 * @usedBySchema DeployPairRevertMemberSchema
 * @usedBySchema DeployPromotionMemberSchema
 * @usedBySchema PageDeployEventSchema
 * @contractShape deploy.event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployEventSchema: z.ZodType<DeployEventDefinition>;
export type DeployEvent = z.infer<typeof DeployEventSchema>;
export {};
//# sourceMappingURL=event.d.ts.map