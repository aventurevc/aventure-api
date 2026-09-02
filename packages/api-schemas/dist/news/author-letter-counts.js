// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsAuthorLetterCountsSchemaDefinition = z.object({
    /** Letter → count map. Keys are single uppercase A–Z characters; missing keys mean zero authors. */
    counts: z.record(z.string(), z.number().int()),
});
/**
 * Per-letter visible news-author counts. Keys are uppercase A–Z initials of author display names; values are the visible author total for that initial.
 *
 * @openapiSchema NewsAuthorLetterCounts
 * @endpoint GET /v1/news/letter-counts
 * @contractShape news.author-letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsAuthorLetterCounts.kt
 */
export const NewsAuthorLetterCountsSchema = NewsAuthorLetterCountsSchemaDefinition;
//# sourceMappingURL=author-letter-counts.js.map