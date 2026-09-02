// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseReconciliationDecisionSchema } from "./reconciliation-decision.js";
const FundraiseReconciliationRunSchemaDefinition = z.object({
    /** Exclusive cursor for the next bounded global plan page. */
    afterEntityId: z.uuid().nullish(),
    /** Immutable operator correlation ID; required for a mutation batch. */
    correlationId: z
        .string()
        .regex(/[\s\S]*\S[\s\S]*/)
        .max(128)
        .nullish(),
    /** Explicit immutable decision batch; omitted or empty creates a plan only. The deployed job configuration applies the caller-visible batch maximum. */
    decision: z.array(FundraiseReconciliationDecisionSchema).optional(),
    /** Exclusive entity selector for a bounded plan. */
    entityId: z.uuid().nullish(),
});
/**
 * One bounded fundraise duplicate plan page or explicit immutable decision batch. An empty decision list plans only and never mutates fundraising rows or creates Harness work.
 *
 * @openapiSchema FundraiseReconciliationRun
 * @endpoint POST /v1/jobs/fundraise-reconciliation/runs
 * @contractShape fundraise.reconciliation-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseReconciliationRun.kt
 */
export const FundraiseReconciliationRunSchema = FundraiseReconciliationRunSchemaDefinition;
//# sourceMappingURL=reconciliation-run.js.map