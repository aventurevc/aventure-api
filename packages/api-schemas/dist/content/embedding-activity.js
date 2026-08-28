// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSourceTypeSchema } from "./source-type.js";
const ContentEmbeddingActivitySchemaDefinition = z.object({
    /** Average owner embedding rows first created per day over seven days */
    createdDailyAverage7d: z.number(),
    /** Owner embedding rows first created during the last 24 hours */
    createdLast24h: z.int(),
    /** Average existing owner embedding rows recalculated per day over the trailing seven days */
    recalculatedDailyAverage7d: z.number(),
    /** Existing owner embedding rows whose embedding vector was recalculated during the last 15 minutes */
    recalculatedLast15m: z.int(),
    /** Existing owner embedding rows recalculated during the last 24 hours */
    recalculatedLast24h: z.int(),
    /** Average owner embedding rows whose semantic-similarity cache watermark was refreshed per day over the trailing seven days */
    similarityRefreshedDailyAverage7d: z.number(),
    /** Owner embedding rows whose semantic-similarity cache watermark was refreshed during the last 15 minutes */
    similarityRefreshedLast15m: z.int(),
    /** Owner embedding rows whose semantic-similarity cache watermark was refreshed during the last 24 hours */
    similarityRefreshedLast24h: z.int(),
    /** Embedding source group */
    sourceType: ContentSourceTypeSchema,
});
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
export const ContentEmbeddingActivitySchema = ContentEmbeddingActivitySchemaDefinition;
//# sourceMappingURL=embedding-activity.js.map