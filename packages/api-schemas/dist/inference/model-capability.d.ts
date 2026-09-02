import { z } from "zod/v4";
declare const InferenceModelCapabilitySchemaDefinition: z.ZodObject<{
    contextWindow: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodString;
    imageInput: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    maxOutputTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    maxServingInputTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    structuredOutputs: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type InferenceModelCapabilityDefinition = z.infer<typeof InferenceModelCapabilitySchemaDefinition>;
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
export declare const InferenceModelCapabilitySchema: z.ZodType<InferenceModelCapabilityDefinition>;
export type InferenceModelCapability = z.infer<typeof InferenceModelCapabilitySchema>;
export {};
//# sourceMappingURL=model-capability.d.ts.map