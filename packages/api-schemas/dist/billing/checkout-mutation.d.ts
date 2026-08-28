import { z } from "zod/v4";
declare const BillingCheckoutMutationSchemaDefinition: z.ZodObject<{
    plan: z.ZodEnum<{
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
    }>;
}, z.core.$strip>;
type BillingCheckoutMutationDefinition = z.infer<typeof BillingCheckoutMutationSchemaDefinition>;
/**
 * Caller-selected plan for server-owned hosted Checkout creation.
 *
 * @openapiSchema BillingCheckoutMutation
 * @endpoint POST /v1/billing/checkout-sessions
 * @contractShape billing.checkout-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingCheckout.kt
 */
export declare const BillingCheckoutMutationSchema: z.ZodType<BillingCheckoutMutationDefinition>;
export type BillingCheckoutMutation = z.infer<typeof BillingCheckoutMutationSchema>;
export {};
//# sourceMappingURL=checkout-mutation.d.ts.map