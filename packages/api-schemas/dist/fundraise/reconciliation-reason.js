// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const FundraiseReconciliationReasonSchema = z.enum([
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
]);
//# sourceMappingURL=reconciliation-reason.js.map