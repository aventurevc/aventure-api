// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityResearchSourceSchema } from "./research-source.js";
import { EntityResearchValueTypeSchema } from "./research-value-type.js";
import { EntityValuationDataConfidenceSchema } from "./valuation-data-confidence.js";
import { ResearchDerivedRangeSchema } from "../research/derived-range.js";
const EntityResearchDetailSchemaDefinition = z.object({
    asOfDate: z.iso.datetime({ offset: true }).nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    creator: z.string().nullish(),
    dataConfidence: EntityValuationDataConfidenceSchema.nullish(),
    /** Read-only range derived only for targetDateAbsolute detail rows */
    derivedRange: ResearchDerivedRangeSchema.nullish(),
    discreteValue: z.number().nullish(),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    id: z.int(),
    source: z.string().nullish(),
    sourceRecord: EntityResearchSourceSchema.nullish(),
    textValue: z.string().nullish(),
    typeResearchDetail: z.string(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    valueResearchDetail: z.string().nullish(),
    valueType: EntityResearchValueTypeSchema,
});
/**
 * Canonical research detail row for research.res_entity_detail
 *
 * @openapiSchema EntityResearchDetail
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @usedBySchema EntityListResearchSchema
 * @usedBySchema EntityResearchSchema
 * @usedBySchema PageEntityResearchDetailSchema
 * @contractShape entity.research-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchDetail.kt
 */
export const EntityResearchDetailSchema = EntityResearchDetailSchemaDefinition;
//# sourceMappingURL=research-detail.js.map