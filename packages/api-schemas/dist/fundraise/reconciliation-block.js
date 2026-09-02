// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FundraiseReconciliationBlockSchemaDefinition = z.object({
    /** Canonical entity UUID */
    entityId: z.uuid(),
    reason: z
        .array(z.enum([
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
    ]))
        .min(1)
        .max(2147483647),
});
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
export const FundraiseReconciliationBlockSchema = FundraiseReconciliationBlockSchemaDefinition;
//# sourceMappingURL=reconciliation-block.js.map