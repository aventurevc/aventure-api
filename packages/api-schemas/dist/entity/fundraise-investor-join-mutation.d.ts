import { z } from "zod/v4";
declare const EntityFundraiseInvestorJoinMutationSchemaDefinition: z.ZodObject<{
    amountInvested: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    dateAnnounced: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
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
    investorEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    investorEntitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    investorPersonId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    investorPersonSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadInvestor: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
}, z.core.$strip>;
type EntityFundraiseInvestorJoinMutationDefinition = z.infer<typeof EntityFundraiseInvestorJoinMutationSchemaDefinition>;
/**
 * Create/update payload for fundraise investor joins. Identify the investor with exactly one side: the entity selectors (investorEntityId or investorEntitySlug) for a firm/fund investor, or the person selectors (investorPersonId or investorPersonSlug) for an angel — never both, and never neither.
 *
 * @openapiSchema EntityFundraiseInvestorJoinMutation
 * @endpoint POST /v1/entities/detail/fundraise-investor-joins
 * @endpoint PATCH /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @endpoint PUT /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @contractShape entity.fundraise-investor-join-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseInvestorJoin.kt
 */
export declare const EntityFundraiseInvestorJoinMutationSchema: z.ZodType<EntityFundraiseInvestorJoinMutationDefinition>;
export type EntityFundraiseInvestorJoinMutation = z.infer<typeof EntityFundraiseInvestorJoinMutationSchema>;
export {};
//# sourceMappingURL=fundraise-investor-join-mutation.d.ts.map