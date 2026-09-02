// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DuplicateUrlCandidateSchema } from "../duplicate/url-candidate.js";
import { EntityUrlMatchModeSchema } from "../entity/url-match-mode.js";
import { EntityUrlMatchStrictnessSchema } from "../entity/url-match-strictness.js";
import { EntityUrlTypeSchema } from "../entity/url-type.js";
const PersonDuplicateCriteriaSchemaDefinition = z.object({
    /** Current person id to omit from post-bootstrap duplicate audits while same-name candidates are reviewed. */
    excludeId: z.uuid().nullish(),
    /** Location */
    location: z.string().nullish(),
    /** Loose name match */
    nameAny: z.string().nullish(),
    /** Full name */
    nameFull: z.string().nullish(),
    /** Embedding vector pinned to qwen-4b-fp16 (Qwen3-Embedding-4B-f16.gguf) from https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf; only this fp16 model is accepted and exactly 2560 floats are required */
    qwen4bFp16Embedding: z.array(z.number()).min(2560).max(2560).nullish(),
    /** URL-safe identifier */
    slug: z.string().nullish(),
    /** Profile URL */
    url: z.string().nullish(),
    /** Additional URL candidates to match */
    urlCandidate: z.array(DuplicateUrlCandidateSchema).optional(),
    /** URL domain match */
    urlDomain: z.string().nullish(),
    /** URL match mode */
    urlMatchMode: EntityUrlMatchModeSchema.nullish(),
    /** Optional URL match strictness. Omit for strict matching. Send loose or any only when the caller intentionally widens URL matching. */
    urlStrictness: EntityUrlMatchStrictnessSchema.nullish(),
    /** URL type */
    urlType: EntityUrlTypeSchema.nullish(),
});
/**
 * Canonical person duplicate-check criteria. URL matching stays strict when urlStrictness is omitted; clients can opt into broader matching with loose or any.
 *
 * @openapiSchema PersonDuplicateCriteria
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @endpoint POST /v1/jobs/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/duplicate-check/candidates
 * @usedBySchema PersonDuplicateCheckJobSchema
 * @contractShape person.duplicate-criteria
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/PersonDuplicateCriteria.kt
 */
export const PersonDuplicateCriteriaSchema = PersonDuplicateCriteriaSchemaDefinition;
//# sourceMappingURL=duplicate-criteria.js.map