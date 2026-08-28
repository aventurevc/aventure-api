// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BillingCheckoutMutationSchemaDefinition = z.object({
    /** Pro billing plan selected for hosted Checkout */
    plan: z.enum(["PRO_MONTHLY", "PRO_YEARLY"]),
});
/**
 * Caller-selected plan for server-owned hosted Checkout creation.
 *
 * @openapiSchema BillingCheckoutMutation
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingCheckout.kt
 */
export const BillingCheckoutMutationSchema = BillingCheckoutMutationSchemaDefinition;
//# sourceMappingURL=checkout-mutation.js.map