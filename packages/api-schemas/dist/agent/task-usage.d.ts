import { z } from "zod/v4";
declare const AgentTaskUsageSchemaDefinition: z.ZodObject<{
    cachedTokens: z.ZodInt;
    completionTokens: z.ZodInt;
    promptTokens: z.ZodInt;
}, z.core.$strip>;
type AgentTaskUsageDefinition = z.infer<typeof AgentTaskUsageSchemaDefinition>;
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
export declare const AgentTaskUsageSchema: z.ZodType<AgentTaskUsageDefinition>;
export type AgentTaskUsage = z.infer<typeof AgentTaskUsageSchema>;
export {};
//# sourceMappingURL=task-usage.d.ts.map