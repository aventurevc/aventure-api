// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingNeighborSchema } from "./embedding-neighbor.js";
const ContentBatchReplaceEntrySchemaDefinition = z.object({
    result: z.array(ContentEmbeddingNeighborSchema),
    sourceId: z.string().min(1),
    sourceType: z.string().min(1),
    targetType: z.string().min(1),
});
/**
 * @openapiSchema ContentBatchReplaceEntry
 * @endpoint PUT /v1/content/similarity/batch
 * @contractShape content.batch-replace-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/content/controller/SemanticSimilarityController.kt
 */
export const ContentBatchReplaceEntrySchema = ContentBatchReplaceEntrySchemaDefinition;
//# sourceMappingURL=batch-replace-entry.js.map