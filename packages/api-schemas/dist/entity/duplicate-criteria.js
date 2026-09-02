// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DuplicateUrlCandidateSchema } from "../duplicate/url-candidate.js";
import { EntityTypeSchema } from "./type.js";
import { EntityUrlMatchModeSchema } from "./url-match-mode.js";
import { EntityUrlMatchStrictnessSchema } from "./url-match-strictness.js";
import { EntityUrlTypeSchema } from "./url-type.js";
const EntityDuplicateCriteriaSchemaDefinition = z.object({
    /** Entity id to exclude from duplicate candidates; not a lookup id */
    excludeId: z.uuid().nullish(),
    /** Location */
    location: z.string().nullish(),
    /** Loose name match */
    nameAny: z.string().nullish(),
    /** Brand name */
    nameBrand: z.string().nullish(),
    /** Legal name */
    nameLegal: z.string().nullish(),
    /** Provider entity UUID that scopes Product/Service duplicate candidates to that provider's current productService catalog, including hidden rows. Product and Service slugs are provider-pair scoped, so cross-provider name reuse is not a duplicate; supply this id to review the one catalog that can collide. */
    productServiceProviderId: z.uuid().nullish(),
    /** Embedding vector pinned to qwen-4b-fp16 (Qwen3-Embedding-4B-f16.gguf) from https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf; only this fp16 model is accepted and exactly 2560 floats are required */
    qwen4bFp16Embedding: z.array(z.number()).min(2560).max(2560).nullish(),
    /** URL-safe identifier */
    slug: z.string().nullish(),
    /** Entity type */
    typeRecord: EntityTypeSchema.nullish(),
    /** Joined entity URL */
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
 * Canonical entity duplicate-check criteria. URL matching stays strict when urlStrictness is omitted; clients can opt into broader matching with loose or any.
 *
 * @openapiSchema EntityDuplicateCriteria
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/duplicate-check/candidates
 * @endpoint POST /v1/jobs/entities/duplicate-check
 * @usedBySchema EntityDuplicateCheckJobSchema
 * @contractShape entity.duplicate-criteria
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/search/EntityDuplicateCriteria.kt
 */
export const EntityDuplicateCriteriaSchema = EntityDuplicateCriteriaSchemaDefinition;
//# sourceMappingURL=duplicate-criteria.js.map