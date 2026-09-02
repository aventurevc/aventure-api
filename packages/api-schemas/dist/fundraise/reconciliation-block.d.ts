import { z } from "zod/v4";
declare const FundraiseReconciliationBlockSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
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
type FundraiseReconciliationBlockDefinition = z.infer<typeof FundraiseReconciliationBlockSchemaDefinition>;
/**
 * One entity excluded from planning because its transaction or investor-join volume exceeded a hard bound. The entity is reported rather than partially planned, so no candidate group is invented from a truncated snapshot.
 *
 * @openapiSchema FundraiseReconciliationBlock
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @usedBySchema FundraiseReconciliationPlanSchema
 * @contractShape fundraise.reconciliation-block
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export declare const FundraiseReconciliationBlockSchema: z.ZodType<FundraiseReconciliationBlockDefinition>;
export type FundraiseReconciliationBlock = z.infer<typeof FundraiseReconciliationBlockSchema>;
export {};
//# sourceMappingURL=reconciliation-block.d.ts.map