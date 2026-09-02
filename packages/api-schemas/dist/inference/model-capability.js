// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const InferenceModelCapabilitySchemaDefinition = z.object({
    /** capabilities.limits.context_window from the gateway listing; the served prompt-plus-generation slot. Null when the upstream does not advertise token limits. */
    contextWindow: z.int().nullish(),
    /** Model id as advertised by the gateway's /v1/models. */
    id: z.string(),
    /** capabilities.image_input.supported from the gateway listing; null when the upstream does not advertise capability flags. */
    imageInput: z.boolean().nullish(),
    /** capabilities.limits.max_output_tokens from the gateway listing; the alias output ceiling. Null when the upstream does not advertise token limits. */
    maxOutputTokens: z.int().nullish(),
    /** capabilities.limits.max_serving_input_tokens from the gateway listing; the derived maximum prompt size after reserving generation and tokenizer headroom. Null when the gateway does not advertise the limit. */
    maxServingInputTokens: z.int().nullish(),
    /** capabilities.structured_outputs.supported from the gateway listing; null when the upstream does not advertise capability flags. */
    structuredOutputs: z.boolean().nullish(),
});
/**
 * Capability flags one model advertises on the gateway's /v1/models; null flags were not advertised by the upstream.
 *
 * @openapiSchema InferenceModelCapability
 * @endpoint GET /v1/inference/models
 * @usedBySchema InferenceModelCatalogSchema
 * @contractShape inference.model-capability
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/inference/InferenceModelCapability.kt
 */
export const InferenceModelCapabilitySchema = InferenceModelCapabilitySchemaDefinition;
//# sourceMappingURL=model-capability.js.map