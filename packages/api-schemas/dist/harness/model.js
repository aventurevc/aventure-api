// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessModelSchemaDefinition = z.object({
    /** One-based orchestrator position; 1 is the default and null means ineligible. */
    agentPosition: z.int().nullable(),
    /** Gateway model id. */
    id: z.string(),
    /** One-based direct micro-task position; 1 is the default and null means ineligible. */
    microTaskPosition: z.int().nullable(),
    /** One-based sub-agent position; 1 is the default and null means ineligible. */
    subAgentPosition: z.int().nullable(),
    /** Whether image input is verified for this model route. */
    vision: z.boolean(),
    /** Whether server-side web search is verified for this model route. */
    webSearch: z.boolean(),
});
/**
 * One configured harness model. A non-null role position makes the model eligible; position 1 is that role's default.
 *
 * @openapiSchema HarnessModel
 * @endpoint GET /v1/harness/models
 * @usedBySchema HarnessModelCatalogSchema
 * @contractShape harness.model
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessModel.kt
 */
export const HarnessModelSchema = HarnessModelSchemaDefinition;
//# sourceMappingURL=model.js.map