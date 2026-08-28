import { z } from "zod/v4";
declare const EntityFundraiseTransactionMutationSchemaDefinition: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        High: "High";
        Low: "Low";
        Medium: "Medium";
        Verified: "Verified";
    }>>>;
    dateAnnounced: z.ZodNullable<z.ZodISODateTime>;
    dateFundingComplete: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    dateInvestorExit: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    financialInstrumentType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Bond: "Bond";
        "Common Stock": "Common Stock";
        "Convertible Note": "Convertible Note";
        Grant: "Grant";
        Loan: "Loan";
        "Other Debt": "Other Debt";
        "Other Equity": "Other Equity";
        "Preferred Stock": "Preferred Stock";
        SAFE: "SAFE";
        Token: "Token";
    }>>>;
    investorCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roundType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Active: "Active";
        Announced: "Announced";
        "Announced; subject to approvals and closing conditions": "Announced; subject to approvals and closing conditions";
        Closed: "Closed";
        Completed: "Completed";
        "In Progress": "In Progress";
        Open: "Open";
    }>>>;
    valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valuationPreMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type EntityFundraiseTransactionMutationDefinition = z.infer<typeof EntityFundraiseTransactionMutationSchemaDefinition>;
/**
 * Create/update payload for a single fundraise round. ONE row per discrete round — a 'Series A that includes the seed' is two writes (Seed row + Series A row), not one row with a combined amount. When sources disagree (e.g. press headline vs. SEC Form D), the primary filing wins and journalistic combined totals are derived, not stored.
 *
 * @openapiSchema EntityFundraiseTransactionMutation
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @contractShape entity.fundraise-transaction-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
 */
export declare const EntityFundraiseTransactionMutationSchema: z.ZodType<EntityFundraiseTransactionMutationDefinition>;
export type EntityFundraiseTransactionMutation = z.infer<typeof EntityFundraiseTransactionMutationSchema>;
export {};
//# sourceMappingURL=fundraise-transaction-mutation.d.ts.map