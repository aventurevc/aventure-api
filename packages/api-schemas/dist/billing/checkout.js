// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingCheckoutSchemaDefinition = z.object({
    expiresAt: z.iso.datetime({ offset: true }),
    plan: z.enum(["PRO_MONTHLY", "PRO_YEARLY", "PRO_YEARLY_GRANDFATHERED"]),
    url: z.string(),
});
/**
 * Hosted Checkout destination and expiry without provider identifiers.
 *
 * @openapiSchema BillingCheckout
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingCheckout.kt
 */
export const BillingCheckoutSchema = BillingCheckoutSchemaDefinition;
//# sourceMappingURL=checkout.js.map