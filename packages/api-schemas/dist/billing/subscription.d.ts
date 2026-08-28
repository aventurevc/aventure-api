import { z } from "zod/v4";
declare const BillingSubscriptionSchemaDefinition: z.ZodObject<{
    allowance: z.ZodType<{
        newCompany: {
            limit: number;
            remaining: number;
            resetAt: string;
            used: number;
        };
        update: {
            limit: number;
            remaining: number;
            resetAt: string;
            used: number;
        };
    }, unknown, z.core.$ZodTypeInternals<{
        newCompany: {
            limit: number;
            remaining: number;
            resetAt: string;
            used: number;
        };
        update: {
            limit: number;
            remaining: number;
            resetAt: string;
            used: number;
        };
    }, unknown>>;
    cancelAtPeriodEnd: z.ZodBoolean;
    entitled: z.ZodBoolean;
    periodEnd: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    periodStart: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    plan: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        PRO_MONTHLY: "PRO_MONTHLY";
        PRO_YEARLY: "PRO_YEARLY";
        PRO_YEARLY_GRANDFATHERED: "PRO_YEARLY_GRANDFATHERED";
    }>>>;
    status: z.ZodEnum<{
        ACTIVE: "ACTIVE";
        CANCELED: "CANCELED";
        INCOMPLETE: "INCOMPLETE";
        INCOMPLETE_EXPIRED: "INCOMPLETE_EXPIRED";
        NONE: "NONE";
        PAST_DUE: "PAST_DUE";
        PAUSED: "PAUSED";
        TRIALING: "TRIALING";
        UNPAID: "UNPAID";
    }>;
    tier: z.ZodEnum<{
        ESSENTIAL: "ESSENTIAL";
        PRO: "PRO";
    }>;
}, z.core.$strip>;
type BillingSubscriptionDefinition = z.infer<typeof BillingSubscriptionSchemaDefinition>;
/**
 * Current Essential or Pro subscription and entitlement state.
 *
 * @openapiSchema BillingSubscription
 * @endpoint GET /v1/billing/subscription
 * @contractShape billing.subscription
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/BillingSubscription.kt
 */
export declare const BillingSubscriptionSchema: z.ZodType<BillingSubscriptionDefinition>;
export type BillingSubscription = z.infer<typeof BillingSubscriptionSchema>;
export {};
//# sourceMappingURL=subscription.d.ts.map