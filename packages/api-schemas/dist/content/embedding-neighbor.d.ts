import { z } from "zod/v4";
declare const ContentEmbeddingNeighborSchemaDefinition: z.ZodObject<{
    aggregateCosineScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    compositeScore: z.ZodNumber;
    cosineScore: z.ZodNumber;
    coverageScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    matchedSectionWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rank: z.ZodInt;
    sectionScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sharedSectionCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    targetId: z.ZodString;
}, z.core.$strip>;
type ContentEmbeddingNeighborDefinition = z.infer<typeof ContentEmbeddingNeighborSchemaDefinition>;
/**
 * Content embedding neighbor
 *
 * @openapiSchema ContentEmbeddingNeighbor
 * @endpoint GET /v1/content/embedding/neighbors
 * @endpoint PUT /v1/content/similarity/batch
 * @usedBySchema ContentBatchReplaceEntrySchema
 * @contractShape content.embedding-neighbor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingModels.kt
 */
export declare const ContentEmbeddingNeighborSchema: z.ZodType<ContentEmbeddingNeighborDefinition>;
export type ContentEmbeddingNeighbor = z.infer<typeof ContentEmbeddingNeighborSchema>;
export {};
//# sourceMappingURL=embedding-neighbor.d.ts.map