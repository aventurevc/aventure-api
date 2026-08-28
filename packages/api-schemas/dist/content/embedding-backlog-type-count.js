// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSourceTypeSchema } from "./source-type.js";
import { EntityTypeSchema } from "../entity/type.js";
const ContentEmbeddingBacklogTypeCountSchemaDefinition = z.object({
    /** Number of owners with no embedding row */
    missingCount: z.int(),
    /** Embedding source-type partition */
    sourceType: ContentSourceTypeSchema,
    /** Entity classification when sourceType=entity. Null for product, service, person, and newsArticle buckets. */
    typeRecord: EntityTypeSchema.nullish(),
});
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
export const ContentEmbeddingBacklogTypeCountSchema = ContentEmbeddingBacklogTypeCountSchemaDefinition;
//# sourceMappingURL=embedding-backlog-type-count.js.map