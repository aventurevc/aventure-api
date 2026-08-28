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
export declare const ContentEmbeddingClusterModeSchema: z.ZodEnum<{
    DRAIN_ONLY: "DRAIN_ONLY";
    EMERGENCY_STOP: "EMERGENCY_STOP";
    PAUSED: "PAUSED";
    RUNNING: "RUNNING";
}>;
export type ContentEmbeddingClusterMode = z.infer<typeof ContentEmbeddingClusterModeSchema>;
//# sourceMappingURL=embedding-cluster-mode.d.ts.map