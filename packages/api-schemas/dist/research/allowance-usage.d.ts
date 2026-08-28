import { z } from "zod/v4";
declare const ResearchAllowanceUsageSchemaDefinition: z.ZodObject<{
    newCompany: z.ZodType<{
        limit: number;
        remaining: number;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit: number;
        remaining: number;
        resetAt: string;
        used: number;
    }, unknown>>;
    update: z.ZodType<{
        limit: number;
        remaining: number;
        resetAt: string;
        used: number;
    }, unknown, z.core.$ZodTypeInternals<{
        limit: number;
        remaining: number;
        resetAt: string;
        used: number;
    }, unknown>>;
}, z.core.$strip>;
type ResearchAllowanceUsageDefinition = z.infer<typeof ResearchAllowanceUsageSchemaDefinition>;
/**
 * @openapiSchema ResearchAllowanceUsage
 * @endpoint GET /v1/billing/subscription
 * @usedBySchema BillingSubscriptionSchema
 * @contractShape research.allowance-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/billing/ResearchAllowance.kt
 */
export declare const ResearchAllowanceUsageSchema: z.ZodType<ResearchAllowanceUsageDefinition>;
export type ResearchAllowanceUsage = z.infer<typeof ResearchAllowanceUsageSchema>;
export {};
//# sourceMappingURL=allowance-usage.d.ts.map