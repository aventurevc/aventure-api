// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PersonFilterSchema } from "./filter.js";
import { SearchConfidenceSchema } from "../search/confidence.js";
import { SearchModeExecutionSchema } from "../search/mode-execution.js";
import { SortSpecPersonSortFieldSchema } from "../sort/spec-person-sort-field.js";
const PersonSearchInterpretationSchemaDefinition = z.object({
    /** Planner confidence in the structured interpretation. */
    confidence: SearchConfidenceSchema,
    /** Requested and executed search strategy. */
    execution: SearchModeExecutionSchema,
    /** True when the semantic fallback replaced an unconstrained planner result with a semantic search over the original query. */
    fallbackUsed: z.boolean(),
    /** Canonical person filter generated from the natural-language query. */
    filter: PersonFilterSchema,
    /** Human-readable summary of how the query was interpreted. */
    interpretation: z.string(),
    /** Sort generated from the natural-language query. */
    sort: SortSpecPersonSortFieldSchema,
    /** Constraint the planner could not translate into the canonical PersonFilter contract; null when every material constraint was supported. */
    unsupported: z.string().nullish(),
});
/**
 * Structured interpretation of a natural-language people search: canonical filter, sort, confidence, and any unsupported constraint the planner could not translate exactly.
 *
 * @openapiSchema PersonSearchInterpretation
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape person.search-interpretation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonNaturalSearch.kt
 */
export const PersonSearchInterpretationSchema = PersonSearchInterpretationSchemaDefinition;
//# sourceMappingURL=search-interpretation.js.map