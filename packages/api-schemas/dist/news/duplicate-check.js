// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UrlMatchModeSchema } from "../url/match-mode.js";
const NewsDuplicateCheckSchemaDefinition = z.object({
    /** Exclude news id */
    excludeId: z.int().nullish(),
    /** External identifier */
    externalId: z.string().nullish(),
    /** Publication name */
    publication: z.string().nullish(),
    /** Embedding vector pinned to qwen-4b-fp16 (Qwen3-Embedding-4B-f16.gguf) from https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf; only this fp16 model is accepted and exactly 2560 floats are required */
    qwen4bFp16Embedding: z.array(z.number()).min(2560).max(2560).nullish(),
    /** Full-text search query */
    search: z.string().nullish(),
    /** URL-safe identifier */
    slug: z.string().nullish(),
    /** Article title */
    title: z.string().nullish(),
    /** Article URL */
    url: z.string().nullish(),
    /** URL domain match */
    urlDomain: z.string().nullish(),
    /** URL match mode */
    urlMatchMode: UrlMatchModeSchema.nullish(),
});
/**
 * Canonical news duplicate-check criteria
 *
 * @openapiSchema NewsDuplicateCheck
 * @endpoint POST /v1/news/duplicate-check
 * @endpoint POST /v1/news/duplicate-check/candidates
 * @contractShape news.duplicate-check
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsDuplicateCheck.kt
 */
export const NewsDuplicateCheckSchema = NewsDuplicateCheckSchemaDefinition;
//# sourceMappingURL=duplicate-check.js.map