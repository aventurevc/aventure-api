// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical Pro billing plan offered by aVenture.
 *
 * @openapiSchema BillingPlanType
 * @endpoint GET /v1/billing/subscription
 * @endpoint POST /v1/billing/checkout-sessions
 * @usedBySchema BillingCheckoutSchema
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape billing.plan-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingPlanType.kt
 */
export const BillingPlanTypeSchema = z.enum([
    "PRO_MONTHLY",
    "PRO_YEARLY",
    "PRO_YEARLY_GRANDFATHERED",
]);
//# sourceMappingURL=plan-type.js.map