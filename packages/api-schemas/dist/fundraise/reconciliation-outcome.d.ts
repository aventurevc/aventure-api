import { z } from "zod/v4";
declare const FundraiseReconciliationOutcomeSchemaDefinition: z.ZodObject<{
    affectedRowCount: z.ZodInt;
    decision: z.ZodEnum<{
        KEEP_SEPARATE: "KEEP_SEPARATE";
        MERGE: "MERGE";
    }>;
    entityId: z.ZodUUID;
    evidenceDigest: z.ZodString;
    keeperTransactionId: z.ZodUUID;
    loserTransactionId: z.ZodArray<z.ZodUUID>;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodEnum<{
        ALREADY_APPLIED: "ALREADY_APPLIED";
        ALREADY_KEPT_SEPARATE: "ALREADY_KEPT_SEPARATE";
        APPLIED: "APPLIED";
        CONFLICT: "CONFLICT";
        FAILED: "FAILED";
        KEPT_SEPARATE: "KEPT_SEPARATE";
        STALE: "STALE";
    }>;
    policyVersion: z.ZodString;
}, z.core.$strip>;
type FundraiseReconciliationOutcomeDefinition = z.infer<typeof FundraiseReconciliationOutcomeSchemaDefinition>;
/**
 * Per-group result from an explicit reconciliation action, including idempotent retries, stale/conflict decisions, and terminal worker failures.
 *
 * @openapiSchema FundraiseReconciliationOutcome
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @usedBySchema FundraiseReconciliationSchema
 * @contractShape fundraise.reconciliation-outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export declare const FundraiseReconciliationOutcomeSchema: z.ZodType<FundraiseReconciliationOutcomeDefinition>;
export type FundraiseReconciliationOutcome = z.infer<typeof FundraiseReconciliationOutcomeSchema>;
export {};
//# sourceMappingURL=reconciliation-outcome.d.ts.map