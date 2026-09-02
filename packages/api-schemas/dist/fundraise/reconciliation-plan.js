// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationBlockSchema } from "./reconciliation-block.js";
import { FundraiseReconciliationGroupSchema } from "./reconciliation-group.js";
/**
 * Bounded deterministic duplicate plan. Counts distinguish duplicate groups and loser rows from unresolved review candidates and incomplete source rows.
 *
 * @openapiSchema FundraiseReconciliationPlan
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @usedBySchema FundraiseReconciliationSchema
 * @contractShape fundraise.reconciliation-plan
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export const FundraiseReconciliationPlanSchema = z.object({
    affectedEntityCount: z.int(),
    blockedEntity: z.array(FundraiseReconciliationBlockSchema),
    blockedEntityCount: z.int(),
    blockedGroupCount: z.int(),
    candidateGroup: z.array(FundraiseReconciliationGroupSchema),
    groupCount: z.int(),
    incompleteRowCount: z.int(),
    keptSeparateGroupCount: z.int(),
    loserRowCount: z.int(),
    /** Canonical entity UUID */
    nextCursor: z.uuid().nullish(),
    pendingDecisionGroupCount: z.int(),
    pendingDecisionLoserRowCount: z.int(),
    policyVersion: z.string(),
    reviewCandidateCount: z.int(),
    scannedEntityCount: z.int(),
});
//# sourceMappingURL=reconciliation-plan.js.map