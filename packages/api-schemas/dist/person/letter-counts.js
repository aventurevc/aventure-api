// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonLetterCountsSchemaDefinition = z.object({
    /** Letter → count map. Keys are single uppercase A–Z characters; missing keys mean zero people. */
    counts: z.record(z.string(), z.number().int()),
});
/**
 * Per-letter visible person counts. Keys are uppercase A–Z initials of the person's last name; values are the visible person total for that initial.
 *
 * @openapiSchema PersonLetterCounts
 * @endpoint GET /v1/people/letter-counts
 * @contractShape person.letter-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonLetterCounts.kt
 */
export const PersonLetterCountsSchema = PersonLetterCountsSchemaDefinition;
//# sourceMappingURL=letter-counts.js.map