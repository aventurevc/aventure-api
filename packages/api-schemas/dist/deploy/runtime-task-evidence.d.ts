import { z } from "zod/v4";
declare const DeployRuntimeTaskEvidenceSchemaDefinition: z.ZodObject<{
    latencyMillis: z.ZodNumber;
    revision: z.ZodString;
    statusCode: z.ZodInt;
    taskToken: z.ZodString;
}, z.core.$strip>;
type DeployRuntimeTaskEvidenceDefinition = z.infer<typeof DeployRuntimeTaskEvidenceSchemaDefinition>;
/**
 * Runtime acceptance observed from one exact desired task
 *
 * @openapiSchema DeployRuntimeTaskEvidence
 * @endpoint GET /v1/deploy/events
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @endpoint POST /v1/deploy/targets/{targetName}/deployments
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @endpoint POST /v1/deploy/targets/{targetName}/reverts
 * @usedBySchema DeployEventSchema
 * @contractShape deploy.runtime-task-evidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployRuntimeTaskEvidenceSchema: z.ZodType<DeployRuntimeTaskEvidenceDefinition>;
export type DeployRuntimeTaskEvidence = z.infer<typeof DeployRuntimeTaskEvidenceSchema>;
export {};
//# sourceMappingURL=runtime-task-evidence.d.ts.map