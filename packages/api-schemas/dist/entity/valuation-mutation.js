// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
import { ValuationTypeSchema } from "../valuation/type.js";
const EntityValuationMutationSchemaDefinition = z.object({
    /** Effective timestamp. Create allows one stated valuation per UTC calendar month. */
    asOfDate: z.iso.datetime({ offset: true }).nullish(),
    /** Confidence tier. Create and full replace default to medium when omitted; merge-patch preserves the existing value when omitted. */
    confidence: EntityValuationDataConfidenceSchema.nullish(),
    /** ISO 4217 currency code, uppercase */
    currency: z.string().nullish(),
    /** Declared basis for valuation. `reported` is charted as post-money by convention. */
    kind: ValuationTypeSchema.nullish(),
    /** Evidence URL stored on the valuation detail. Distinct from the sourceType and sourceDetail query provenance. */
    source: z.string().nullish(),
    /** Positive valuation amount in full currency units. */
    valuation: z.number().int().nullish(),
});
/**
 * Create/update payload for stated entity valuation datapoints. Writes persist `latestValuation` research-detail rows only; fundraise-derived points are read-only on this surface.
 *
 * @openapiSchema EntityValuationMutation
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @contractShape entity.valuation-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationMutation.kt
 */
export const EntityValuationMutationSchema = EntityValuationMutationSchemaDefinition;
//# sourceMappingURL=valuation-mutation.js.map