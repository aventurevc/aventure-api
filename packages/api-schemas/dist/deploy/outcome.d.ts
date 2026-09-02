import { z } from "zod/v4";
/**
 * Result of a deploy attempt. Submitting is the durable pre-submit intent recorded before the provider call; a Submitting or Submitted event with no later terminal event is closed by restart recovery under the next operation's lease.
 *
 * @openapiSchema DeployOutcome
 * @endpoint GET /v1/deploy/events
 * @endpoint GET /v1/deploy/targets/{targetName}/tags
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions
 * @endpoint POST /v1/deploy/pairs/{pairName}/promotions/exact
 * @endpoint POST /v1/deploy/pairs/{pairName}/reverts
 * @endpoint POST /v1/deploy/targets/{targetName}/deployments
 * @endpoint POST /v1/deploy/targets/{targetName}/promotions
 * @endpoint POST /v1/deploy/targets/{targetName}/reverts
 * @usedBySchema DeployEventSchema
 * @usedBySchema DeployPairRevertSchema
 * @usedBySchema DeployPromotionSchema
 * @usedBySchema DeployTagSchema
 * @contractShape deploy.outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/Deploy.kt
 */
export declare const DeployOutcomeSchema: z.ZodEnum<{
    Failure: "Failure";
    Submitted: "Submitted";
    Submitting: "Submitting";
    Success: "Success";
}>;
export type DeployOutcome = z.infer<typeof DeployOutcomeSchema>;
//# sourceMappingURL=outcome.d.ts.map