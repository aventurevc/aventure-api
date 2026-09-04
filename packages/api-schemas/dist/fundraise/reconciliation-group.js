// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationDecisionTypeSchema } from "./reconciliation-decision-type.js";
import { FundraiseReconciliationReasonSchema } from "./reconciliation-reason.js";
const FundraiseReconciliationGroupSchemaDefinition = z.object({
    classification: z.enum(["EXACT_AUTO_MERGE", "EVIDENCE_REQUIRED", "BLOCKED"]),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    evidenceDigest: z.string().regex(/^[0-9a-f]{64}$/),
    /** Canonical fundraise transaction UUID */
    keeperTransactionId: z.uuid(),
    loserTransactionId: z.array(z.uuid()).min(1).max(100),
    persistedDecision: FundraiseReconciliationDecisionTypeSchema.nullish(),
    reason: z.array(FundraiseReconciliationReasonSchema),
});
/**
 * One deterministic fundraise duplicate candidate group. The evidence digest covers the group's transaction and investor-join state, policy version, and group identity.
 *
 * @openapiSchema FundraiseReconciliationGroup
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @usedBySchema FundraiseReconciliationPlanSchema
 * @contractShape fundraise.reconciliation-group
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export const FundraiseReconciliationGroupSchema = FundraiseReconciliationGroupSchemaDefinition;
//# sourceMappingURL=reconciliation-group.js.map