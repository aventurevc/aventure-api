// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Cluster-wide admission mode for content-embedding and similarity work.
 *
 * @openapiSchema ContentEmbeddingClusterMode
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingBacklogSchema
 * @contractShape content.embedding-cluster-mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingClusterControl.kt
 */
export const ContentEmbeddingClusterModeSchema = z.enum([
    "RUNNING",
    "DRAIN_ONLY",
    "PAUSED",
    "EMERGENCY_STOP",
]);
//# sourceMappingURL=embedding-cluster-mode.js.map