// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchDerivedBucketSchema } from "./derived-bucket.js";
/**
 * Read-only derived range projection for targetDateAbsolute detail rows
 *
 * @openapiSchema ResearchDerivedRange
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
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
 * @usedBySchema EntityResearchDetailSchema
 * @contractShape research.derived-range
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/ResearchDerivedRange.kt
 */
export const ResearchDerivedRangeSchema = z.object({
    /** Observation timestamp from the source detail row */
    asOfDate: z.iso.datetime({ offset: true }),
    /** Derived bucket using inclusive 0, 3, 6, 12, and 24 month boundaries */
    bucket: ResearchDerivedBucketSchema,
    /** Whole months from now() to targetDate */
    monthsFromNow: z.int(),
    /** Absolute target date stored for a targetDateAbsolute detail row */
    targetDate: z.iso.datetime({ offset: true }),
});
//# sourceMappingURL=derived-range.js.map