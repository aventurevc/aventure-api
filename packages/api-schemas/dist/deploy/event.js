// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeployModeSchema } from "./mode.js";
import { DeployOutcomeSchema } from "./outcome.js";
import { DeployRuntimeTaskEvidenceSchema } from "./runtime-task-evidence.js";
const DeployEventSchemaDefinition = z.object({
    /** Provider deployment observed immediately before this phase */
    cursorDeploymentId: z.string().nullish(),
    /** Provider service version observed immediately before this phase */
    cursorServiceVersion: z.number().int().nullish(),
    /** Opaque provider deployment identity used to resume terminal observation after a lost response */
    deploymentId: z.string().nullish(),
    /** Positive desired replica count proven by terminal provider acceptance when available */
    desiredReplicas: z.int().nullish(),
    /** Environment label */
    environment: z.string(),
    /** Stable event UUID */
    eventId: z.uuid(),
    /** Image reference configured before the attempt */
    fromImage: z.string().nullish(),
    /** Runtime digest observed before the deploy when available */
    fromRuntimeImageId: z.string().nullish(),
    /** Database row id */
    id: z.number().int(),
    /** Masked provider message when present */
    message: z.string().nullish(),
    /** Target platform source mode */
    mode: DeployModeSchema,
    /** Identity of the deploy operation that recorded this event, shared by every event of one deploy or promotion and reported live by the deploy guard; absent on events recorded before the control plane stamped operations */
    operationId: z.uuid().nullish(),
    /** Deploy outcome */
    outcome: DeployOutcomeSchema,
    /** Provider mutation phase for this event */
    phase: z.enum(["PolicyBaseline", "Candidate", "Compensation"]),
    /** Status, revision, and latency observed from each accepted task */
    runtimeTaskEvidence: z.array(DeployRuntimeTaskEvidenceSchema),
    /** Deploy target key */
    targetName: z.string(),
    /** Opaque tokens identifying the exact accepted desired tasks when available */
    taskToken: z.array(z.string()),
    /** Requested image reference */
    toImage: z.string(),
    /** Exact runtime digest expected for the requested image when available */
    toRuntimeImageId: z.string().nullish(),
    /** Event timestamp */
    triggeredAt: z.iso.datetime({ offset: true }),
    /** Employee or agent display name that triggered the deploy */
    triggeredBy: z.string(),
});
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
export const DeployEventSchema = DeployEventSchemaDefinition;
//# sourceMappingURL=event.js.map