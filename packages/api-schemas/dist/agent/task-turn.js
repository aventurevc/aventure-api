// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentTaskTurnSchemaDefinition = z.object({
    /** Masked tool-call arguments JSON for tool turns */
    argumentsJson: z.string().nullish(),
    /** Completion tokens billed for this turn */
    completionTokens: z.int().nullish(),
    /** Masked message content, when the turn carried any */
    content: z.string().nullish(),
    /** Provider finish reason for assistant turns */
    finishReason: z.string().nullish(),
    /** Model that produced this turn */
    model: z.string().nullish(),
    /** Prompt tokens billed for this turn */
    promptTokens: z.int().nullish(),
    /** Masked tool-call result JSON for tool turns */
    resultJson: z.string().nullish(),
    /** Message role: system, user, assistant, or tool */
    role: z.string(),
    /** Loopback HTTP status for tool turns */
    statusCode: z.int().nullish(),
    /** Whether the loopback response had a successful HTTP status */
    successful: z.boolean().nullish(),
    /** Provider tool-call id this turn issues or answers */
    toolCallId: z.string().nullish(),
    /** Tool operation name for tool turns */
    toolName: z.string().nullish(),
    /** Tool API path for tool turns */
    toolPath: z.string().nullish(),
    /** Zero-based position of this turn in the loop transcript */
    turnIndex: z.int(),
});
/**
 * One structured turn of an agent-task inference loop
 *
 * @openapiSchema AgentTaskTurn
 * @endpoint GET /v1/jobs/runs/{runId}/transcript
 * @usedBySchema AgentTaskTranscriptSchema
 * @contractShape agent.task-turn
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AgentTaskTurn.kt
 */
export const AgentTaskTurnSchema = AgentTaskTurnSchemaDefinition;
//# sourceMappingURL=task-turn.js.map