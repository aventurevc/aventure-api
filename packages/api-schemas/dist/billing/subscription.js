// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchAllowanceUsageSchema } from "../research/allowance-usage.js";
const BillingSubscriptionSchemaDefinition = z.object({
    allowance: ResearchAllowanceUsageSchema,
    cancelAtPeriodEnd: z.boolean(),
    entitled: z.boolean(),
    periodEnd: z.iso.datetime({ offset: true }).nullish(),
    periodStart: z.iso.datetime({ offset: true }).nullish(),
    plan: z.enum(["PRO_MONTHLY", "PRO_YEARLY", "PRO_YEARLY_GRANDFATHERED"]).nullish(),
    status: z.enum([
        "NONE",
        "INCOMPLETE",
        "INCOMPLETE_EXPIRED",
        "TRIALING",
        "ACTIVE",
        "PAST_DUE",
        "CANCELED",
        "UNPAID",
        "PAUSED",
    ]),
    tier: z.enum(["ESSENTIAL", "PRO"]),
});
/**
 * Current Essential or Pro subscription and entitlement state.
 *
 * @openapiSchema BillingSubscription
 * @endpoint GET /v1/billing/subscription
 * @contractShape billing.subscription
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingSubscription.kt
 */
export const BillingSubscriptionSchema = BillingSubscriptionSchemaDefinition;
//# sourceMappingURL=subscription.js.map