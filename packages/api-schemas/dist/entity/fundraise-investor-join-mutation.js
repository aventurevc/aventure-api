// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseFinancialInstrumentTypeSchema } from "../fundraise/financial-instrument-type.js";
const EntityFundraiseInvestorJoinMutationSchemaDefinition = z.object({
    /** Investor-level attributed amount invested in the fundraise transaction currency. API and MCP request bodies use a JSON number such as 220000 or 123456.78; aventure-cli uses --amount-invested 220000 or --amount-invested 123456.78. Do not send currency signs, currency codes, comma grouping, quoted numeric strings, or abbreviations such as 220k or 0.22M. In PATCH application/merge-patch+json, amountInvested:null clears the value. */
    amountInvested: z.number().nullish(),
    /** Exact announced timestamp used to disambiguate same-label rounds */
    dateAnnounced: z.iso.datetime({ offset: true }).nullish(),
    /** Financial instrument/vehicle for this investor's participation (e.g. SAFE, Preferred Stock, Convertible Note). Lets one round carry distinct vehicles per investor join. In PATCH application/merge-patch+json, omit to preserve the current value; financialInstrumentType:null clears it. */
    financialInstrumentType: FundraiseFinancialInstrumentTypeSchema.nullish(),
    /** Existing investor entity identifier. The entity must already exist; create a referenced investor entity first with POST /v1/entities/detail. */
    investorEntityId: z.uuid().nullish(),
    /** Existing investor entity slug when investorEntityId is omitted. The entity must already exist; create it first with POST /v1/entities/detail. */
    investorEntitySlug: z.string().nullish(),
    /** Existing investor person identifier. The person must already exist; create a referenced investor person first with POST /v1/people/detail. */
    investorPersonId: z.uuid().nullish(),
    /** Existing investor person slug when investorPersonId is omitted. The person must already exist; create it first with POST /v1/people/detail. */
    investorPersonSlug: z.string().nullish(),
    /** Whether this investor led the round — the lead/anchor investor that set terms or made the primary commitment. Optional: defaults to false on create and replace when omitted; in PATCH application/merge-patch+json, omit to preserve the current value. */
    leadInvestor: z.boolean().nullish(),
    /** Raw fundraise round label used when transactionId is omitted */
    round: z.string().nullish(),
    /** Fundraise round transaction id. The target entity id/slug is the entity that raised the round; for an Investment Firm investment, use the portfolio/fundraising company as target and identify the firm with investorEntityId or investorEntitySlug. When omitted, round lookup uses the target entity plus round/dateAnnounced. */
    transactionId: z.uuid().nullish(),
});
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
export const EntityFundraiseInvestorJoinMutationSchema = EntityFundraiseInvestorJoinMutationSchemaDefinition;
//# sourceMappingURL=fundraise-investor-join-mutation.js.map