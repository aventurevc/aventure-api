// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSourceTypeSchema } from "./source-type.js";
const ContentEmbeddingOwnerActivitySchemaDefinition = z.object({
    /** When the owner embedding row was first created */
    createdAt: z.iso.datetime({ offset: true }),
    /** Owner display name (entity brand/legal name or person full name) */
    name: z.string(),
    /** When the embedding vector was last recomputed; null when never recalculated since creation */
    recomputedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Embedding generation through which the semantic-similarity cache was refreshed; copied from the embedding computation timestamp after a successful refresh, not the refresh completion time; null when no generation has been refreshed */
    similarityRefreshedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Owner slug for linking; null when the owner has no slug */
    slug: z.string().nullish(),
    /** Canonical owner id (entity or person UUID) */
    sourceId: z.string(),
    /** Embedding source-type partition (entity or person) */
    sourceType: ContentSourceTypeSchema,
});
/**
 * An entity or person whose content embedding was created or recalculated within the activity window, including the embedding-generation watermark through which its semantic-similarity cache is current.
 *
 * @openapiSchema ContentEmbeddingOwnerActivity
 * @endpoint GET /v1/content/embedding/activity
 * @contractShape content.embedding-owner-activity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingOwnerActivity.kt
 */
export const ContentEmbeddingOwnerActivitySchema = ContentEmbeddingOwnerActivitySchemaDefinition;
//# sourceMappingURL=embedding-owner-activity.js.map