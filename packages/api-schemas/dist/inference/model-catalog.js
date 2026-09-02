// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { InferenceModelCapabilitySchema } from "./model-capability.js";
const InferenceModelCatalogSchemaDefinition = z.object({
    /** Capability flags per advertised model, sorted by model id; read verbatim from the gateway's /v1/models (the sole capability owner). */
    capability: z.array(InferenceModelCapabilitySchema),
    /** Model id used when a request carries no model override; null when the profile declares no default. */
    defaultChatModel: z.string().nullish(),
    /** Model ids advertised by the gateway's /v1/models, sorted. */
    model: z.array(z.string()),
    /** Resolved inference profile name. */
    profile: z.string(),
});
/**
 * Chat models the resolved inference profile's gateway advertises, plus the profile's default-chat-model applied when a request carries no model.
 *
 * @openapiSchema InferenceModelCatalog
 * @endpoint GET /v1/inference/models
 * @contractShape inference.model-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/inference/InferenceModelCatalog.kt
 */
export const InferenceModelCatalogSchema = InferenceModelCatalogSchemaDefinition;
//# sourceMappingURL=model-catalog.js.map