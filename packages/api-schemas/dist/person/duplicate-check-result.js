// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonDuplicateCheckResultSchemaDefinition = z.object({
    /** IDs of matched people */
    matchedPersonId: z.array(z.uuid()),
    /** Total number of matches found */
    totalMatches: z.int(),
});
/**
 * Person duplicate-check result payload
 *
 * @openapiSchema PersonDuplicateCheckResult
 * @endpoint GET /v1/jobs/people/duplicate-check
 * @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
 * @usedBySchema PersonDuplicateCheckJobSchema
 * @contractShape person.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export const PersonDuplicateCheckResultSchema = PersonDuplicateCheckResultSchemaDefinition;
//# sourceMappingURL=duplicate-check-result.js.map