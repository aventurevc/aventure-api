// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const FundraiseReconciliationDecisionTypeSchema = z.enum(["MERGE", "KEEP_SEPARATE"]);
//# sourceMappingURL=reconciliation-decision-type.js.map