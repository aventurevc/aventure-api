import { z } from "zod/v4";
/**
 * Finite refresh-work lane represented by the backlog report.
 *
 * @openapiSchema ContentEmbeddingBacklogWorkType
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingBacklogWorkSchema
 * @contractShape content.embedding-backlog-work-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export declare const ContentEmbeddingBacklogWorkTypeSchema: z.ZodEnum<{
    previousEmbedding: "previousEmbedding";
    staleSimilarity: "staleSimilarity";
}>;
export type ContentEmbeddingBacklogWorkType = z.infer<typeof ContentEmbeddingBacklogWorkTypeSchema>;
//# sourceMappingURL=embedding-backlog-work-type.d.ts.map