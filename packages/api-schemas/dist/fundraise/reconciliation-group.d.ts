import { z } from "zod/v4";
declare const FundraiseReconciliationGroupSchemaDefinition: z.ZodObject<{
    classification: z.ZodEnum<{
        BLOCKED: "BLOCKED";
        EVIDENCE_REQUIRED: "EVIDENCE_REQUIRED";
        EXACT_AUTO_MERGE: "EXACT_AUTO_MERGE";
    }>;
    entityId: z.ZodUUID;
    evidenceDigest: z.ZodString;
    keeperTransactionId: z.ZodUUID;
    loserTransactionId: z.ZodArray<z.ZodUUID>;
    persistedDecision: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        KEEP_SEPARATE: "KEEP_SEPARATE";
        MERGE: "MERGE";
    }>>>;
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
}, z.core.$strip>;
type FundraiseReconciliationGroupDefinition = z.infer<typeof FundraiseReconciliationGroupSchemaDefinition>;
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
export declare const FundraiseReconciliationGroupSchema: z.ZodType<FundraiseReconciliationGroupDefinition>;
export type FundraiseReconciliationGroup = z.infer<typeof FundraiseReconciliationGroupSchema>;
export {};
//# sourceMappingURL=reconciliation-group.d.ts.map