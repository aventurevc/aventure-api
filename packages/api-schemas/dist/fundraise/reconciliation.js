// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationOutcomeSchema } from "./reconciliation-outcome.js";
import { FundraiseReconciliationPlanSchema } from "./reconciliation-plan.js";
const FundraiseReconciliationSchemaDefinition = z.object({
    outcome: z.array(FundraiseReconciliationOutcomeSchema),
    plan: FundraiseReconciliationPlanSchema.nullish(),
    refreshRunId: z.uuid().nullish(),
});
/**
 * Typed result of one bounded plan page or explicit mutation. Plan runs set plan; mutation runs set per-group outcome and may include the dependent aggregate refresh run id.
 *
 * @openapiSchema FundraiseReconciliation
 * @endpoint GET /v1/jobs/fundraise-reconciliation/runs/{runId}
 * @contractShape fundraise.reconciliation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliation.kt
 */
export const FundraiseReconciliationSchema = FundraiseReconciliationSchemaDefinition;
//# sourceMappingURL=reconciliation.js.map