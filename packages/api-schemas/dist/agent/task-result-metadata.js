// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskUsageSchema } from "./task-usage.js";
/**
 * Durable agent-task result metadata
 *
 * @openapiSchema AgentTaskResultMetadata
 * @endpoint GET /v1/jobs/runs/{jobId}
 * @endpoint GET /v1/jobs/runs/{runId}/transcript
 * @usedBySchema AgentTaskTranscriptSchema
 * @usedBySchema JobDetailSchema
 * @contractShape agent.task-result-metadata
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/JobDetail.kt
 */
export const AgentTaskResultMetadataSchema = z.object({
    /** Serialized work result envelope, when this was a work run */
    envelopeJson: z.string().nullish(),
    /** Audit-driven fix iteration for this run */
    fixIteration: z.int(),
    /** Parent run id for audits and fix re-dispatches */
    parentRunId: z.uuid().nullish(),
    /** Configured prompt document name used by this run */
    promptName: z.string(),
    /** Version hash of the prompt document used by this run */
    promptVersion: z.string(),
    /** Version hash by skill document used by this run */
    skillVersion: z.record(z.string(), z.string()),
    /** Configured agent task key */
    taskKey: z.string(),
    /** Number of chat transcript messages in the loop */
    transcriptMessageCount: z.int(),
    /** Token usage summed across the run's assistant turns */
    usage: AgentTaskUsageSchema,
    /** Serialized audit verdict, when this was an audit run */
    verdictJson: z.string().nullish(),
});
//# sourceMappingURL=task-result-metadata.js.map