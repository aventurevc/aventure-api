// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DeployPairMemberSchemaDefinition = z.object({
    /** Production target that receives the promoted image */
    destinationTargetName: z.string(),
    /** main-lane tags a newest-staging-build promotion would write */
    newestPromotedTag: z.array(z.string()),
    /** Newest immutable staging tag in the registry for this member; absent when none has a push timestamp */
    newestStagingTag: z.string().nullish(),
    /** main-lane tags a running-on-staging promotion would write */
    promotedTag: z.array(z.string()),
    /** Operator hold on the destination target that blocks promotion while set; the value names the blocker */
    promotionHold: z.string().nullish(),
    /** Image a pair revert would restore for this member — the recorded prior image of the newest operation that deployed every member's current image together. Absent when the members' current images were not deployed by one shared operation; revert such members individually. */
    revertImage: z.string().nullish(),
    /** Immutable staging tag currently running on the source target; absent when it cannot be resolved */
    runningStagingTag: z.string().nullish(),
    /** Staging target whose running image is the promotion source */
    sourceTargetName: z.string(),
    /** Why the running staging tag could not be resolved */
    unresolvedReason: z.string().nullish(),
});
/**
 * One member of a configured deploy pair with its resolved staging state
 *
 * @openapiSchema DeployPairMember
 * @endpoint GET /v1/deploy/pairs
 * @usedBySchema DeployPairSchema
 * @contractShape deploy.pair-member
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/deploy/DeployPromotion.kt
 */
export const DeployPairMemberSchema = DeployPairMemberSchemaDefinition;
//# sourceMappingURL=pair-member.js.map