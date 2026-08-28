// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContentEmbeddingNeighborSchemaDefinition = z.object({
    /** Aggregate fused-vector cosine score used for ANN candidate retrieval. */
    aggregateCosineScore: z.number().nullish(),
    /** Ranking score combining aggregate, shared sections, and coverage. */
    compositeScore: z.number(),
    /** Aggregate fused-vector cosine score; preserved as the compatibility score. */
    cosineScore: z.number(),
    /** Comparable section coverage shared by the source and target records. */
    coverageScore: z.number().nullish(),
    /** Matched canonical section weight shared by the source and target records. */
    matchedSectionWeight: z.number().nullish(),
    rank: z.int(),
    /** Weighted cosine score across section vectors present on both records. */
    sectionScore: z.number().nullish(),
    /** Number of canonical sections present on both records. */
    sharedSectionCount: z.int().nullish(),
    targetId: z.string(),
});
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
export const ContentEmbeddingNeighborSchema = ContentEmbeddingNeighborSchemaDefinition;
//# sourceMappingURL=embedding-neighbor.js.map