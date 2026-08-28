// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSourceTypeSchema } from "./source-type.js";
const ContentEmbeddingMutationSchemaDefinition = z.object({
    /** Embedding model version */
    modelVersion: z.string().min(1),
    /** Embedding vector pinned to qwen-4b-fp16 (Qwen3-Embedding-4B-f16.gguf) from https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf; only this fp16 model is accepted and exactly 2560 floats are required */
    qwen4bFp16: z.array(z.number()).min(2560).max(2560),
    /** SHA-256 hash of the source content */
    sourceHash: z
        .string()
        .regex(/^[a-fA-F0-9]{64}$/)
        .min(1),
    /** Embedding source identifier */
    sourceId: z.string().min(1),
    /** Serialized JSON payload stored in JSONB */
    sourceJson: z.string().min(1),
    /** Source text used to create the embedding */
    sourceText: z.string().min(1),
    /** Embedding source type */
    sourceType: ContentSourceTypeSchema,
});
/**
 * Create/update payload for content embedding writes
 *
 * @openapiSchema ContentEmbeddingMutation
 * @endpoint PUT /v1/content/embedding
 * @contractShape content.embedding-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingModels.kt
 */
export const ContentEmbeddingMutationSchema = ContentEmbeddingMutationSchemaDefinition;
//# sourceMappingURL=embedding-mutation.js.map