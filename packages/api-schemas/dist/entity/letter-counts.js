// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityLetterCountsSchemaDefinition = z.object({
    /** Letter → count map. Keys are single uppercase A–Z characters; missing keys mean zero entities. */
    counts: z.record(z.string(), z.number().int()),
});
/**
 * Per-letter visible entity counts. Keys are uppercase A–Z initials of the entity name; values are the visible entity total for that initial within the requested typeRecord scope.
 *
 * @openapiSchema EntityLetterCounts
 * @endpoint GET /v1/entities/letter-counts
 * @contractShape entity.letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityLetterCounts.kt
 */
export const EntityLetterCountsSchema = EntityLetterCountsSchemaDefinition;
//# sourceMappingURL=letter-counts.js.map