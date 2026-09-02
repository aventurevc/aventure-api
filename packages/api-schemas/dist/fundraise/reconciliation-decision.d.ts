import { z } from "zod/v4";
declare const FundraiseReconciliationDecisionSchemaDefinition: z.ZodObject<{
    classification: z.ZodEnum<{
        EVIDENCE_REQUIRED: "EVIDENCE_REQUIRED";
        EXACT_AUTO_MERGE: "EXACT_AUTO_MERGE";
    }>;
    decision: z.ZodEnum<{
        KEEP_SEPARATE: "KEEP_SEPARATE";
        MERGE: "MERGE";
    }>;
    entityId: z.ZodUUID;
    evidenceDigest: z.ZodString;
    evidenceReference: z.ZodArray<z.ZodString>;
    keeperTransactionId: z.ZodUUID;
    loserTransactionId: z.ZodArray<z.ZodUUID>;
    policyVersion: z.ZodString;
    reason: z.ZodArray<z.ZodEnum<{
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
    }>>;
    supersededDecision: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        KEEP_SEPARATE: "KEEP_SEPARATE";
        MERGE: "MERGE";
    }>>>;
}, z.core.$strip>;
type FundraiseReconciliationDecisionDefinition = z.infer<typeof FundraiseReconciliationDecisionSchemaDefinition>;
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
export declare const FundraiseReconciliationDecisionSchema: z.ZodType<FundraiseReconciliationDecisionDefinition>;
export type FundraiseReconciliationDecision = z.infer<typeof FundraiseReconciliationDecisionSchema>;
export {};
//# sourceMappingURL=reconciliation-decision.d.ts.map