// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityUrlTypeSchema } from "../entity/url-type.js";
const DuplicateUrlCandidateSchemaDefinition = z.object({
    /** Duplicate URL value */
    url: z.string().nullish(),
    urlType: EntityUrlTypeSchema.nullish(),
});
/**
 * Typed URL signal used for duplicate detection
 *
 * @openapiSchema DuplicateUrlCandidate
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @usedBySchema EntityDuplicateCriteriaSchema
 * @usedBySchema PersonDuplicateCriteriaSchema
 * @contractShape duplicate.url-candidate
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/DuplicateUrlCandidate.kt
 */
export const DuplicateUrlCandidateSchema = DuplicateUrlCandidateSchemaDefinition;
//# sourceMappingURL=url-candidate.js.map