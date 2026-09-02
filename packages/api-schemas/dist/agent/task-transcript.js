// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskResultMetadataSchema } from "./task-result-metadata.js";
import { AgentTaskTurnSchema } from "./task-turn.js";
const AgentTaskTranscriptSchemaDefinition = z.object({
    /** Attempt number this transcript represents; 0 is the first attempt */
    attempt: z.int(),
    /** Persisted attempt numbers for this run, newest first */
    availableAttempt: z.array(z.int()),
    /** Durable agent-task run header */
    result: AgentTaskResultMetadataSchema,
    /** Ordered structured loop turns */
    turn: z.array(AgentTaskTurnSchema),
});
/**
 * Agent-task run header composed with its turns
 *
 * @openapiSchema AgentTaskTranscript
 * @endpoint GET /v1/jobs/runs/{runId}/transcript
 * @contractShape agent.task-transcript
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AgentTaskTranscript.kt
 */
export const AgentTaskTranscriptSchema = AgentTaskTranscriptSchemaDefinition;
//# sourceMappingURL=task-transcript.js.map