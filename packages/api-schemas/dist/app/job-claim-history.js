// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AppJobClaimHistorySchemaDefinition = z.object({
    /** Claim action */
    claimAction: z.string(),
    /** Claim event timestamp */
    claimedAt: z.iso.datetime({ offset: true }),
    /** Monotonic claim history id */
    claimHistoryId: z.number().int(),
    /** Fence token captured for this claim */
    fenceToken: z.number().int(),
    /** Stable app job key */
    jobKey: z.string(),
    /** Boot id for the owning JVM */
    leaseOwnerBootId: z.uuid(),
    /** Instance that owned the claim */
    leaseOwnerInstanceId: z.string(),
    /** Claim lease expiry */
    leaseUntil: z.iso.datetime({ offset: true }),
    /** Previous fence token when the claim was renewed or stolen */
    previousFenceToken: z.number().int().nullish(),
    /** Previous run id when the claim was stolen */
    previousRunId: z.uuid().nullish(),
    /** Run id */
    runId: z.uuid(),
    /** Canonical semantic key */
    semanticKey: z.string(),
});
/**
 * Claim ownership event for one app job run
 *
 * @openapiSchema AppJobClaimHistory
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @usedBySchema AppJobRunDetailSchema
 * @contractShape app.job-claim-history
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const AppJobClaimHistorySchema = AppJobClaimHistorySchemaDefinition;
//# sourceMappingURL=job-claim-history.js.map