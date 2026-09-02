// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FundraiseReconciliationGroupSchemaDefinition = z.object({
    classification: z.enum(["EXACT_AUTO_MERGE", "EVIDENCE_REQUIRED", "BLOCKED"]),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    evidenceDigest: z.string().regex(/^[0-9a-f]{64}$/),
    /** Canonical fundraise transaction UUID */
    keeperTransactionId: z.uuid(),
    loserTransactionId: z.array(z.uuid()).min(1).max(100),
    persistedDecision: z.enum(["MERGE", "KEEP_SEPARATE"]).nullish(),
    reason: z.array(z.enum([
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
    ])),
});
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
export const FundraiseReconciliationGroupSchema = FundraiseReconciliationGroupSchemaDefinition;
//# sourceMappingURL=reconciliation-group.js.map