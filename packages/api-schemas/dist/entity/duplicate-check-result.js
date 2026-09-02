// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityDuplicateCheckResultSchemaDefinition = z.object({
    /** IDs of matched entities */
    matchedEntityId: z.array(z.uuid()),
    /** Total number of matches found */
    totalMatches: z.int(),
});
/**
 * Entity duplicate-check result payload
 *
 * @openapiSchema EntityDuplicateCheckResult
 * @endpoint GET /v1/jobs/entities/duplicate-check
 * @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
 * @usedBySchema EntityDuplicateCheckJobSchema
 * @contractShape entity.duplicate-check-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/duplicatecheck/DuplicateCheckResult.kt
 */
export const EntityDuplicateCheckResultSchema = EntityDuplicateCheckResultSchemaDefinition;
//# sourceMappingURL=duplicate-check-result.js.map