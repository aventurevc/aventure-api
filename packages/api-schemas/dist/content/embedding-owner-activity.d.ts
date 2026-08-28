import { z } from "zod/v4";
declare const ContentEmbeddingOwnerActivitySchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    name: z.ZodString;
    recomputedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    similarityRefreshedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceId: z.ZodString;
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
type ContentEmbeddingOwnerActivityDefinition = z.infer<typeof ContentEmbeddingOwnerActivitySchemaDefinition>;
/**
 * An entity or person whose content embedding was created or recalculated within the activity window, including the embedding-generation watermark through which its semantic-similarity cache is current.
 *
 * @openapiSchema ContentEmbeddingOwnerActivity
 * @endpoint GET /v1/content/embedding/activity
 * @contractShape content.embedding-owner-activity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingOwnerActivity.kt
 */
export declare const ContentEmbeddingOwnerActivitySchema: z.ZodType<ContentEmbeddingOwnerActivityDefinition>;
export type ContentEmbeddingOwnerActivity = z.infer<typeof ContentEmbeddingOwnerActivitySchema>;
export {};
//# sourceMappingURL=embedding-owner-activity.d.ts.map