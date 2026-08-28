import { z } from "zod/v4";
declare const ContentEmbeddingBacklogWorkSchemaDefinition: z.ZodObject<{
    pendingCount: z.ZodInt;
    sourceType: z.ZodEnum<{
        agentHelpDoc: "agentHelpDoc";
        blogPost: "blogPost";
        classificationCode: "classificationCode";
        classificationTag: "classificationTag";
        entity: "entity";
        newsArticle: "newsArticle";
        person: "person";
        product: "product";
        service: "service";
        text: "text";
    }>;
    workType: z.ZodEnum<{
        previousEmbedding: "previousEmbedding";
        staleSimilarity: "staleSimilarity";
    }>;
}, z.core.$strip>;
type ContentEmbeddingBacklogWorkDefinition = z.infer<typeof ContentEmbeddingBacklogWorkSchemaDefinition>;
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
export declare const ContentEmbeddingBacklogWorkSchema: z.ZodType<ContentEmbeddingBacklogWorkDefinition>;
export type ContentEmbeddingBacklogWork = z.infer<typeof ContentEmbeddingBacklogWorkSchema>;
export {};
//# sourceMappingURL=embedding-backlog-work.d.ts.map