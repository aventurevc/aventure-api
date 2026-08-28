import { z } from "zod/v4";
declare const ContentEmbeddingActivitySchemaDefinition: z.ZodObject<{
    createdDailyAverage7d: z.ZodNumber;
    createdLast24h: z.ZodInt;
    recalculatedDailyAverage7d: z.ZodNumber;
    recalculatedLast15m: z.ZodInt;
    recalculatedLast24h: z.ZodInt;
    similarityRefreshedDailyAverage7d: z.ZodNumber;
    similarityRefreshedLast15m: z.ZodInt;
    similarityRefreshedLast24h: z.ZodInt;
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
}, z.core.$strip>;
type ContentEmbeddingActivityDefinition = z.infer<typeof ContentEmbeddingActivitySchemaDefinition>;
/**
 * Owner embedding-row creation, embedding recalculation, and semantic-similarity refresh activity for one source group. Entity includes entity, product, and service source partitions.
 *
 * @openapiSchema ContentEmbeddingActivity
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingBacklogSchema
 * @contractShape content.embedding-activity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export declare const ContentEmbeddingActivitySchema: z.ZodType<ContentEmbeddingActivityDefinition>;
export type ContentEmbeddingActivity = z.infer<typeof ContentEmbeddingActivitySchema>;
export {};
//# sourceMappingURL=embedding-activity.d.ts.map