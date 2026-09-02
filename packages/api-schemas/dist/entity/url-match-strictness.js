// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * URL strictness for duplicate detection. strict is the default when omitted. loose and any are explicit caller opt-ins for broader matching. Clients that want progressive widening should retry intentionally rather than relying on server fallback.
 *
 * @openapiSchema EntityUrlMatchStrictness
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/duplicate-check/candidates
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/people/duplicate-check/candidates
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/jobs/entities/duplicate-check
 * @endpoint POST /v1/jobs/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @usedBySchema EntityDuplicateCriteriaSchema
 * @usedBySchema PersonDuplicateCriteriaSchema
 * @contractShape entity.url-match-strictness
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlMatchStrictness.kt
 */
export const EntityUrlMatchStrictnessSchema = z.enum(["strict", "loose", "any"]);
//# sourceMappingURL=url-match-strictness.js.map