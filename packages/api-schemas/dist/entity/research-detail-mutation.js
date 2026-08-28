// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
const EntityResearchDetailMutationSchemaDefinition = z.object({
    /** Observation timestamp for dated detail shapes. */
    asOfDate: z.iso.datetime({ offset: true }).nullish(),
    /** Creator identifier for the research detail. */
    creator: z.string().nullish(),
    /** Confidence tier for the research detail: low, medium, or high. Omitting it persists NULL — no default is fabricated. */
    dataConfidence: EntityValuationDataConfidenceSchema.nullish(),
    /** Numeric value for monetary, ratio, score, count, and growth-rate details. numericGrowthRate uses percentage points: send 80 for 80%, not 0.8; use the selected detail type's range. */
    discreteValue: z.number().nullish(),
    /** Legacy source display text. Prefer provenance query parameters. */
    source: z.string().nullish(),
    /** Text value for free-text or employee-range details. Generic research details reject acceleratorParticipation writes; use entities relationships join. Write '$' literally in currency text — escaped forms such as '\$1M' are rejected as shell artifacts; monetary amounts belong in discreteValue, not textValue. */
    textValue: z.string().nullish(),
    /** Research detail type token. Run GET /v1/entities/research/details/types (CLI: entities research details types list) for the token inventory and each token's value shape. */
    typeResearchDetail: z.string(),
    /** String value for token, currency, period, date-interval, or target-duration shapes. monetaryFlow packs "CURRENCY|PERIOD" (e.g. "USD|P1Y"); monetaryFlowOverPeriod packs "CURRENCY|START/END" as an ISO-8601 date interval (e.g. "USD|2021-01-01/2025-12-31"), with asOfDate holding the separate report date. */
    valueResearchDetail: z.string().nullish(),
});
/**
 * Request body for create/replace research detail writes. Use typeResearchDetail to select the contract, then send the matching value field for that contract.
 *
 * @openapiSchema EntityResearchDetailMutation
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/detail/full
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.research-detail-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchDetailMutation.kt
 */
export const EntityResearchDetailMutationSchema = EntityResearchDetailMutationSchemaDefinition;
//# sourceMappingURL=research-detail-mutation.js.map