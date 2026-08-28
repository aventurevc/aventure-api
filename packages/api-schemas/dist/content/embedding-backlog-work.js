// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingBacklogWorkTypeSchema } from "./embedding-backlog-work-type.js";
import { ContentSourceTypeSchema } from "./source-type.js";
const ContentEmbeddingBacklogWorkSchemaDefinition = z.object({
    /** Number of source rows pending for this refresh-work lane */
    pendingCount: z.int(),
    /** Embedding source-type partition */
    sourceType: ContentSourceTypeSchema,
    /** Refresh-work lane */
    workType: ContentEmbeddingBacklogWorkTypeSchema,
});
/**
 * Exact pending refresh work count for one source-type and refresh-work lane.
 *
 * @openapiSchema ContentEmbeddingBacklogWork
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingBacklogSchema
 * @contractShape content.embedding-backlog-work
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export const ContentEmbeddingBacklogWorkSchema = ContentEmbeddingBacklogWorkSchemaDefinition;
//# sourceMappingURL=embedding-backlog-work.js.map