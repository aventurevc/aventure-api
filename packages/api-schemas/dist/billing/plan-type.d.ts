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
export declare const BillingPlanTypeSchema: z.ZodEnum<{
    PRO_MONTHLY: "PRO_MONTHLY";
    PRO_YEARLY: "PRO_YEARLY";
    PRO_YEARLY_GRANDFATHERED: "PRO_YEARLY_GRANDFATHERED";
}>;
export type BillingPlanType = z.infer<typeof BillingPlanTypeSchema>;
//# sourceMappingURL=plan-type.d.ts.map