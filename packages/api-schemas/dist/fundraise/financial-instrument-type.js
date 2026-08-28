// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Fundraise financial instrument type — the vehicle a round or investor join used
 *
 * @openapiSchema FundraiseFinancialInstrumentType
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins
 * @endpoint GET /v1/entities/detail/fundraise-investor-joins/{joinId}
 * @endpoint POST /v1/entities/detail/fundraise-investor-joins
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint PATCH /v1/entities/detail/fundraise-investor-joins
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/detail/fundraise-investor-joins
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/detail/fundraise-investor-joins
 * @usedBySchema EntityFundraiseInvestorJoinMutationSchema
 * @usedBySchema EntityFundraiseInvestorJoinSchema
 * @usedBySchema EntityFundraiseTransactionMutationSchema
 * @contractShape fundraise.financial-instrument-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseFinancialInstrumentType.kt
 */
export const FundraiseFinancialInstrumentTypeSchema = z.enum([
    "SAFE",
    "Convertible Note",
    "Preferred Stock",
    "Common Stock",
    "Other Equity",
    "Bond",
    "Loan",
    "Other Debt",
    "Grant",
    "Token",
]);
//# sourceMappingURL=financial-instrument-type.js.map