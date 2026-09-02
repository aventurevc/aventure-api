import { z } from "zod/v4";
declare const FundraiseReconciliationRunSchemaDefinition: z.ZodObject<{
    afterEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    decision: z.ZodOptional<z.ZodArray<z.ZodType<{
        classification: "EVIDENCE_REQUIRED" | "EXACT_AUTO_MERGE";
        decision: "KEEP_SEPARATE" | "MERGE";
        entityId: string;
        evidenceDigest: string;
        evidenceReference: string[];
        keeperTransactionId: string;
        loserTransactionId: string[];
        policyVersion: string;
        reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        supersededDecision?: "KEEP_SEPARATE" | "MERGE" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        classification: "EVIDENCE_REQUIRED" | "EXACT_AUTO_MERGE";
        decision: "KEEP_SEPARATE" | "MERGE";
        entityId: string;
        evidenceDigest: string;
        evidenceReference: string[];
        keeperTransactionId: string;
        loserTransactionId: string[];
        policyVersion: string;
        reason: ("AMOUNT_MISSING_OR_ZERO" | "CANONICAL_ROUND_MATCH" | "CONFLICTING_MERGE_FIELDS" | "CURRENCY_MISSING" | "ENTITY_TRANSACTION_LIMIT_REACHED" | "EXACT_AMOUNT" | "EXACT_CURRENCY" | "INVESTOR_JOIN_LIMIT_REACHED" | "NEAR_AMOUNT" | "RAW_ROUND_MATCH" | "UNKNOWN_SEMANTIC_VARIANT")[];
        supersededDecision?: "KEEP_SEPARATE" | "MERGE" | null | undefined;
    }, unknown>>>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type FundraiseReconciliationRunDefinition = z.infer<typeof FundraiseReconciliationRunSchemaDefinition>;
/**
 * One bounded fundraise duplicate plan page or explicit immutable decision batch. An empty decision list plans only and never mutates fundraising rows or creates Harness work.
 *
 * @openapiSchema FundraiseReconciliationRun
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @contractShape fundraise.reconciliation-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliationRun.kt
 */
export declare const FundraiseReconciliationRunSchema: z.ZodType<FundraiseReconciliationRunDefinition>;
export type FundraiseReconciliationRun = z.infer<typeof FundraiseReconciliationRunSchema>;
export {};
//# sourceMappingURL=reconciliation-run.d.ts.map