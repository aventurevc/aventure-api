import { z } from "zod/v4";
/**
 * Explicit operator action for one immutable planned candidate group.
 *
 * @openapiSchema FundraiseReconciliationDecisionType
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @usedBySchema FundraiseReconciliationDecisionSchema
 * @usedBySchema FundraiseReconciliationGroupSchema
 * @usedBySchema FundraiseReconciliationOutcomeSchema
 * @contractShape fundraise.reconciliation-decision-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export declare const FundraiseReconciliationDecisionTypeSchema: z.ZodEnum<{
    KEEP_SEPARATE: "KEEP_SEPARATE";
    MERGE: "MERGE";
}>;
export type FundraiseReconciliationDecisionType = z.infer<typeof FundraiseReconciliationDecisionTypeSchema>;
//# sourceMappingURL=reconciliation-decision-type.d.ts.map