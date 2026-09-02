// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DeployRuntimeTaskEvidenceSchemaDefinition = z.object({
    /** Acceptance request latency in milliseconds */
    latencyMillis: z.number().int(),
    /** Running source revision observed from the task */
    revision: z.string(),
    /** Successful HTTP status observed from the task */
    statusCode: z.int(),
    /** Opaque token identifying the accepted task */
    taskToken: z.string(),
});
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
export const DeployRuntimeTaskEvidenceSchema = DeployRuntimeTaskEvidenceSchemaDefinition;
//# sourceMappingURL=runtime-task-evidence.js.map