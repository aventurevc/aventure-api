// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * ISO-8601 timestamp range for temporal filters.
 *
 * @openapiSchema DateRange
 * @endpoint GET /v1/app/saved-views
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/app/saved-views/{savedViewId}
 * @endpoint POST /v1/app/saved-views
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/app/saved-views/{savedViewId}
 * @endpoint DELETE /v1/app/saved-views/{savedViewId}
 * @usedBySchema EntityFilterSchema
 * @contractShape date.range
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/filter/DateRange.kt
 */
export const DateRangeSchema = z.object({
    /** Inclusive latest timestamp. */
    max: z.iso.datetime({ offset: true }).nullish(),
    /** Inclusive earliest timestamp. */
    min: z.iso.datetime({ offset: true }).nullish(),
});
//# sourceMappingURL=range.js.map