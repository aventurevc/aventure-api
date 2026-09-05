// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessModelSchema } from "./model.js";
const HarnessModelCatalogSchemaDefinition = z.object({
    /** Configured models in declaration order, including inactive models with no role position. */
    model: z.array(HarnessModelSchema),
    /** Model selected for tasks that require image input. */
    taskVisionModel: z.string(),
});
/**
 * Configured harness models and their role eligibility.
 *
 * @openapiSchema HarnessModelCatalog
 * @endpoint GET /v1/harness/models
 * @contractShape harness.model-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessModelCatalog.kt
 */
export const HarnessModelCatalogSchema = HarnessModelCatalogSchemaDefinition;
//# sourceMappingURL=model-catalog.js.map