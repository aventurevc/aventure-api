import { z } from "zod/v4";
declare const FundraiseReconciliationSchemaDefinition: z.ZodObject<{
    outcome: z.ZodArray<z.ZodType<{
        affectedRowCount: number;
        decision: "KEEP_SEPARATE" | "MERGE";
        entityId: string;
        evidenceDigest: string;
        keeperTransactionId: string;
        loserTransactionId: string[];
        message?: string | null | undefined;
        outcome: "ALREADY_APPLIED" | "ALREADY_KEPT_SEPARATE" | "APPLIED" | "CONFLICT" | "FAILED" | "KEPT_SEPARATE" | "STALE";
        policyVersion: string;
    }, unknown, z.core.$ZodTypeInternals<{
        affectedRowCount: number;
        decision: "KEEP_SEPARATE" | "MERGE";
        entityId: string;
        evidenceDigest: string;
        keeperTransactionId: string;
        loserTransactionId: string[];
        message?: string | null | undefined;
        outcome: "ALREADY_APPLIED" | "ALREADY_KEPT_SEPARATE" | "APPLIED" | "CONFLICT" | "FAILED" | "KEPT_SEPARATE" | "STALE";
        policyVersion: string;
    }, unknown>>>;
    plan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        affectedEntityCount: z.ZodInt;
        blockedEntity: z.ZodArray<z.ZodType<{
            entityId: string;
            reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        }, unknown, z.core.$ZodTypeInternals<{
            entityId: string;
            reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        }, unknown>>>;
        blockedEntityCount: z.ZodInt;
        blockedGroupCount: z.ZodInt;
        candidateGroup: z.ZodArray<z.ZodType<{
            classification: "BLOCKED" | "EVIDENCE_REQUIRED" | "EXACT_AUTO_MERGE";
            entityId: string;
            evidenceDigest: string;
            keeperTransactionId: string;
            loserTransactionId: string[];
            persistedDecision?: "KEEP_SEPARATE" | "MERGE" | null | undefined;
            reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        }, unknown, z.core.$ZodTypeInternals<{
            classification: "BLOCKED" | "EVIDENCE_REQUIRED" | "EXACT_AUTO_MERGE";
            entityId: string;
            evidenceDigest: string;
            keeperTransactionId: string;
            loserTransactionId: string[];
            persistedDecision?: "KEEP_SEPARATE" | "MERGE" | null | undefined;
            reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        }, unknown>>>;
        groupCount: z.ZodInt;
        incompleteRowCount: z.ZodInt;
        keptSeparateGroupCount: z.ZodInt;
        loserRowCount: z.ZodInt;
        nextCursor: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        pendingDecisionGroupCount: z.ZodInt;
        pendingDecisionLoserRowCount: z.ZodInt;
        policyVersion: z.ZodString;
        reviewCandidateCount: z.ZodInt;
        scannedEntityCount: z.ZodInt;
    }, z.core.$strip>>>;
    refreshRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type FundraiseReconciliationDefinition = z.infer<typeof FundraiseReconciliationSchemaDefinition>;
/**
 * Typed result of one bounded plan page or explicit mutation. Plan runs set plan; mutation runs set per-group outcome and may include the dependent aggregate refresh run id.
 *
 * @openapiSchema FundraiseReconciliation
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @contractShape fundraise.reconciliation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export declare const FundraiseReconciliationSchema: z.ZodType<FundraiseReconciliationDefinition>;
export type FundraiseReconciliation = z.infer<typeof FundraiseReconciliationSchema>;
export {};
//# sourceMappingURL=reconciliation.d.ts.map