import { z } from "zod/v4";
export declare const QWEN_4B_FP16_EMBEDDING_DIMENSIONS = 2560;
export declare const QWEN_4B_FP16_EMBEDDING_SOURCE_URL = "https://huggingface.co/Qwen/Qwen3-Embedding-4B-GGUF?show_file_info=Qwen3-Embedding-4B-f16.gguf";
/**
 * Shared client-side embedding vector pinned to qwen-4b-fp16.
 *
 * @shared primitive:single reusable client embedding vector; not direct because the backend currently emits repeated inline float-array properties instead of a reusable component
 * @usedByEndpoint none:external-root
 * @contractShape embedding.qwen4b-fp16-embedding
 * @contractRole canonical
 * @ownerModule client/embedding/qwen-4b-fp16.ts
 */
export declare const Qwen4bFp16EmbeddingSchema: z.ZodArray<z.ZodNumber>;
export type Qwen4bFp16Embedding = z.infer<typeof Qwen4bFp16EmbeddingSchema>;
//# sourceMappingURL=qwen-4b-fp16.d.ts.map