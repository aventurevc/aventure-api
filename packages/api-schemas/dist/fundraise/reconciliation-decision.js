// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FundraiseReconciliationDecisionSchemaDefinition = z.object({
    /** Actionable classification copied from the immutable plan group. */
    classification: z.enum(["EXACT_AUTO_MERGE", "EVIDENCE_REQUIRED"]),
    decision: z.enum(["MERGE", "KEEP_SEPARATE"]),
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
    reason: z
        .array(z.enum([
        "EXACT_AMOUNT",
        "EXACT_CURRENCY",
        "RAW_ROUND_MATCH",
        "CANONICAL_ROUND_MATCH",
        "AMOUNT_MISSING_OR_ZERO",
        "CURRENCY_MISSING",
        "NEAR_AMOUNT",
        "UNKNOWN_SEMANTIC_VARIANT",
        "CONFLICTING_MERGE_FIELDS",
        "ENTITY_TRANSACTION_LIMIT_REACHED",
        "INVESTOR_JOIN_LIMIT_REACHED",
    ]))
        .min(1)
        .max(2147483647),
    supersededDecision: z.enum(["MERGE", "KEEP_SEPARATE"]).nullish(),
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