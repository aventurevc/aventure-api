// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentTaskUsageSchemaDefinition = z.object({
    /** Prompt tokens served from the provider cache across the run; a subset of promptTokens. Display % cached = cachedTokens / promptTokens */
    cachedTokens: z.int(),
    /** Completion tokens generated across the run's assistant turns */
    completionTokens: z.int(),
    /** Prompt tokens billed across the run's assistant turns (includes cached reads) */
    promptTokens: z.int(),
});
/**
 * Token usage summed across an agent-task run
 *
 * @openapiSchema AgentTaskUsage
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @endpoint GET /v1/jobs/runs/{runId}/transcript
 * @usedBySchema AgentTaskResultMetadataSchema
 * @contractShape agent.task-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const AgentTaskUsageSchema = AgentTaskUsageSchemaDefinition;
//# sourceMappingURL=task-usage.js.map