import { z } from "zod/v4";
/**
 * Fundraise financial instrument type — the vehicle a round or investor join used
 *
 * @openapiSchema FundraiseFinancialInstrumentType
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins/{joinId}
 * @endpoint POST /v1/entities/detail/fundraise-investor-joins
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint PATCH /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/detail/fundraise-investor-joins
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/{entityId}/fundraise-investor-joins/{joinId}
 * @usedBySchema EntityFundraiseInvestorJoinMutationSchema
 * @usedBySchema EntityFundraiseInvestorJoinSchema
 * @usedBySchema EntityFundraiseTransactionMutationSchema
 * @contractShape fundraise.financial-instrument-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseFinancialInstrumentType.kt
 */
export declare const FundraiseFinancialInstrumentTypeSchema: z.ZodEnum<{
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
}>;
export type FundraiseFinancialInstrumentType = z.infer<typeof FundraiseFinancialInstrumentTypeSchema>;
//# sourceMappingURL=financial-instrument-type.d.ts.map