import { z } from "zod/v4";
declare const ContentEmbeddingMutationSchemaDefinition: z.ZodObject<{
    modelVersion: z.ZodString;
    qwen4bFp16: z.ZodArray<z.ZodNumber>;
    sourceHash: z.ZodString;
    sourceId: z.ZodString;
    sourceJson: z.ZodString;
    sourceText: z.ZodString;
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
type ContentEmbeddingMutationDefinition = z.infer<typeof ContentEmbeddingMutationSchemaDefinition>;
/**
 * Create/update payload for content embedding writes
 *
 * @openapiSchema ContentEmbeddingMutation
 * @endpoint PUT /v1/content/embedding
 * @contractShape content.embedding-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingModels.kt
 */
export declare const ContentEmbeddingMutationSchema: z.ZodType<ContentEmbeddingMutationDefinition>;
export type ContentEmbeddingMutation = z.infer<typeof ContentEmbeddingMutationSchema>;
export {};
//# sourceMappingURL=embedding-mutation.d.ts.map