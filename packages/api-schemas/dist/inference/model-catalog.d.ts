import { z } from "zod/v4";
declare const InferenceModelCatalogSchemaDefinition: z.ZodObject<{
    capability: z.ZodArray<z.ZodType<{
        contextWindow?: number | null | undefined;
        id: string;
        imageInput?: boolean | null | undefined;
        maxOutputTokens?: number | null | undefined;
        maxServingInputTokens?: number | null | undefined;
        structuredOutputs?: boolean | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        contextWindow?: number | null | undefined;
        id: string;
        imageInput?: boolean | null | undefined;
        maxOutputTokens?: number | null | undefined;
        maxServingInputTokens?: number | null | undefined;
        structuredOutputs?: boolean | null | undefined;
    }, unknown>>>;
    defaultChatModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    model: z.ZodArray<z.ZodString>;
    profile: z.ZodString;
}, z.core.$strip>;
type InferenceModelCatalogDefinition = z.infer<typeof InferenceModelCatalogSchemaDefinition>;
/**
 * Chat models the resolved inference profile's gateway advertises, plus the profile's default-chat-model applied when a request carries no model.
 *
 * @openapiSchema InferenceModelCatalog
 * @endpoint GET /v1/inference/models
 * @contractShape inference.model-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/inference/InferenceModelCatalog.kt
 */
export declare const InferenceModelCatalogSchema: z.ZodType<InferenceModelCatalogDefinition>;
export type InferenceModelCatalog = z.infer<typeof InferenceModelCatalogSchema>;
export {};
//# sourceMappingURL=model-catalog.d.ts.map