// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationDecisionTypeSchema } from "./reconciliation-decision-type.js";
const FundraiseReconciliationOutcomeSchemaDefinition = z.object({
    affectedRowCount: z.int(),
    decision: FundraiseReconciliationDecisionTypeSchema,
    /** Canonical entity UUID */
    entityId: z.uuid(),
    evidenceDigest: z.string().regex(/^[0-9a-f]{64}$/),
    /** Canonical fundraise transaction UUID */
    keeperTransactionId: z.uuid(),
    loserTransactionId: z.array(z.uuid()).min(1).max(100),
    message: z.string().nullish(),
    outcome: z.enum([
        "APPLIED",
        "ALREADY_APPLIED",
        "KEPT_SEPARATE",
        "ALREADY_KEPT_SEPARATE",
        "STALE",
        "CONFLICT",
        "FAILED",
    ]),
    policyVersion: z.string(),
});
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
export const FundraiseReconciliationOutcomeSchema = FundraiseReconciliationOutcomeSchemaDefinition;
//# sourceMappingURL=reconciliation-outcome.js.map