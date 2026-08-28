import { z } from "zod/v4";
declare const BillingCheckoutSchemaDefinition: z.ZodObject<{
    expiresAt: z.ZodISODateTime;
    plan: z.ZodEnum<{
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_GRANDFATHERED: "PRO_YEARLY_GRANDFATHERED";
    }>;
    url: z.ZodString;
}, z.core.$strip>;
type BillingCheckoutDefinition = z.infer<typeof BillingCheckoutSchemaDefinition>;
/**
 * Hosted Checkout destination and expiry without provider identifiers.
 *
 * @openapiSchema BillingCheckout
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingCheckout.kt
 */
export declare const BillingCheckoutSchema: z.ZodType<BillingCheckoutDefinition>;
export type BillingCheckout = z.infer<typeof BillingCheckoutSchema>;
export {};
//# sourceMappingURL=checkout.d.ts.map