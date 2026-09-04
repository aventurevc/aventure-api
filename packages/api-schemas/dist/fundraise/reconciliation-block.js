// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationReasonSchema } from "./reconciliation-reason.js";
const FundraiseReconciliationBlockSchemaDefinition = z.object({
    /** Canonical entity UUID */
    entityId: z.uuid(),
    reason: z.array(FundraiseReconciliationReasonSchema).min(1).max(2147483647),
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