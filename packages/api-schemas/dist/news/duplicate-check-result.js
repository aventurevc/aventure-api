// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsDuplicateCheckResultSchemaDefinition = z.object({
    /** IDs of matched news articles */
    matchedNewsId: z.array(z.int()),
    /** Total number of matches found */
    totalMatches: z.int(),
});
/**
 * News duplicate-check result payload
 *
 * @openapiSchema NewsDuplicateCheckResult
 * @endpoint GET /v1/jobs/news/duplicate-check
 * @endpoint GET /v1/jobs/news/duplicate-check/{jobId}
 * @usedBySchema NewsDuplicateCheckJobSchema
 * @contractShape news.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export const NewsDuplicateCheckResultSchema = NewsDuplicateCheckResultSchemaDefinition;
//# sourceMappingURL=duplicate-check-result.js.map