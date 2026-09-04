// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationDecisionTypeSchema } from "./reconciliation-decision-type.js";
import { FundraiseReconciliationReasonSchema } from "./reconciliation-reason.js";
const FundraiseReconciliationDecisionSchemaDefinition = z.object({
    /** Actionable classification copied from the immutable plan group. */
    classification: z.enum(["EXACT_AUTO_MERGE", "EVIDENCE_REQUIRED"]),
    decision: FundraiseReconciliationDecisionTypeSchema,
    /** Canonical entity UUID */
    entityId: z.uuid(),
    /** SHA-256 digest of the immutable plan-group evidence snapshot. */
    evidenceDigest: z.string().regex(/^[0-9a-f]{64}$/),
    /** Canonical source URLs supporting the reconciliation decision. */
    evidenceReference: z.array(z.string()).max(20),
    /** Canonical fundraise transaction UUID */
    keeperTransactionId: z.uuid(),
    /** Canonical fundraise transaction UUIDs designated as losers in the plan group. */
    loserTransactionId: z.array(z.uuid()).min(1).max(100),
    /** Reconciliation policy version copied from the immutable plan. */
    policyVersion: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(64),
    reason: z.array(FundraiseReconciliationReasonSchema).min(1).max(2147483647),
    supersededDecision: FundraiseReconciliationDecisionTypeSchema.nullish(),
});
/**
 * Explicit action for one immutable plan group. Evidence references are required for keep-separate and for merges whose current plan classification requires evidence.
 *
 * @openapiSchema FundraiseReconciliationDecision
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @usedBySchema FundraiseReconciliationRunSchema
 * @contractShape fundraise.reconciliation-decision
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export const FundraiseReconciliationDecisionSchema = FundraiseReconciliationDecisionSchemaDefinition;
//# sourceMappingURL=reconciliation-decision.js.map