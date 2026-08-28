// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseDataConfidenceSchema } from "../fundraise/data-confidence.js";
import { FundraiseFinancialInstrumentTypeSchema } from "../fundraise/financial-instrument-type.js";
import { FundraiseTransactionStatusSchema } from "../fundraise/transaction-status.js";
const EntityFundraiseTransactionMutationSchemaDefinition = z.object({
    /** Amount raised in this round only, in `currency` units (full units, not minor). Never include amounts from prior rounds, even when a press release reports a combined headline figure — record each round separately. Requires `currency` when supplied. */
    amountRaised: z.number().int().nullish(),
    /** Creator label */
    creator: z.string().nullish(),
    /** Required when amountRaised is supplied; ISO 4217 currency code. */
    currency: z.string().nullish(),
    /** Data confidence level */
    dataConfidence: FundraiseDataConfidenceSchema.nullish(),
    /** Required occurrence date for the round. Use the announcement date; otherwise use the earliest source publication date announcing the round. For month/year evidence use the first day of that month; after source-tier search with only a year, use YYYY-01-01T00:00:00Z. */
    dateAnnounced: z.iso.datetime({ offset: true }).nullable(),
    /** Date funding completed */
    dateFundingComplete: z.iso.datetime({ offset: true }).nullish(),
    /** Investor exit date */
    dateInvestorExit: z.iso.datetime({ offset: true }).nullish(),
    /** Financial instrument type */
    financialInstrumentType: FundraiseFinancialInstrumentTypeSchema.nullish(),
    /** Source-reported number of investors in the round. This can exceed the identified investor joins when a source reports a total without naming every investor; it is not derived from raw join-row count. */
    investorCount: z.int().nullish(),
    /** Round label (e.g. Pre-Seed, Seed, Series A). One row per round — never collapse multiple rounds into a single transaction even when press reports a combined headline. */
    round: z.string().nullish(),
    /** Round type */
    roundType: z.string().nullish(),
    /** Transaction status */
    status: FundraiseTransactionStatusSchema.nullish(),
    /** Post-money valuation */
    valuationPostMoney: z.number().int().nullish(),
    /** Pre-money valuation */
    valuationPreMoney: z.number().int().nullish(),
});
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
export const EntityFundraiseTransactionMutationSchema = EntityFundraiseTransactionMutationSchemaDefinition;
//# sourceMappingURL=fundraise-transaction-mutation.js.map