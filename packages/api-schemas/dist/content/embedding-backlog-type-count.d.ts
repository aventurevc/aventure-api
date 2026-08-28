import { z } from "zod/v4";
declare const ContentEmbeddingBacklogTypeCountSchemaDefinition: z.ZodObject<{
    missingCount: z.ZodInt;
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
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
}, z.core.$strip>;
type ContentEmbeddingBacklogTypeCountDefinition = z.infer<typeof ContentEmbeddingBacklogTypeCountSchemaDefinition>;
/**
 * Outstanding missing-embedding count for one source-type (and optional typeRecord) bucket
 *
 * @openapiSchema ContentEmbeddingBacklogTypeCount
 * @endpoint GET /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog
 * @endpoint PUT /v1/content/embedding/backlog/mode
 * @endpoint DELETE /v1/content/embedding/backlog
 * @usedBySchema ContentEmbeddingBacklogSchema
 * @contractShape content.embedding-backlog-type-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingBacklog.kt
 */
export declare const ContentEmbeddingBacklogTypeCountSchema: z.ZodType<ContentEmbeddingBacklogTypeCountDefinition>;
export type ContentEmbeddingBacklogTypeCount = z.infer<typeof ContentEmbeddingBacklogTypeCountSchema>;
export {};
//# sourceMappingURL=embedding-backlog-type-count.d.ts.map