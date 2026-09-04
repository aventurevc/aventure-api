import { z } from "zod/v4";
/**
 * Exact structural fact that explains a candidate classification.
 *
 * @openapiSchema FundraiseReconciliationReason
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @usedBySchema FundraiseReconciliationBlockSchema
 * @usedBySchema FundraiseReconciliationDecisionSchema
 * @usedBySchema FundraiseReconciliationGroupSchema
 * @contractShape fundraise.reconciliation-reason
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export declare const FundraiseReconciliationReasonSchema: z.ZodEnum<{
    AMOUNT_MISSING_OR_ZERO: "AMOUNT_MISSING_OR_ZERO";
    CANONICAL_ROUND_MATCH: "CANONICAL_ROUND_MATCH";
    CONFLICTING_MERGE_FIELDS: "CONFLICTING_MERGE_FIELDS";
    CURRENCY_MISSING: "CURRENCY_MISSING";
    ENTITY_TRANSACTION_LIMIT_REACHED: "ENTITY_TRANSACTION_LIMIT_REACHED";
    EXACT_AMOUNT: "EXACT_AMOUNT";
    EXACT_CURRENCY: "EXACT_CURRENCY";
    INVESTOR_JOIN_LIMIT_REACHED: "INVESTOR_JOIN_LIMIT_REACHED";
    NEAR_AMOUNT: "NEAR_AMOUNT";
    RAW_ROUND_MATCH: "RAW_ROUND_MATCH";
    UNKNOWN_SEMANTIC_VARIANT: "UNKNOWN_SEMANTIC_VARIANT";
}>;
export type FundraiseReconciliationReason = z.infer<typeof FundraiseReconciliationReasonSchema>;
//# sourceMappingURL=reconciliation-reason.d.ts.map