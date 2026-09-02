import { z } from "zod/v4";
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
export declare const AgentTaskResultMetadataSchema: z.ZodObject<{
    envelopeJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fixIteration: z.ZodInt;
    parentRunId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    promptName: z.ZodString;
    promptVersion: z.ZodString;
    skillVersion: z.ZodRecord<z.ZodString, z.ZodString>;
    taskKey: z.ZodString;
    transcriptMessageCount: z.ZodInt;
    usage: z.ZodType<{
        cachedTokens: number;
        completionTokens: number;
        promptTokens: number;
    }, unknown, z.core.$ZodTypeInternals<{
        cachedTokens: number;
        completionTokens: number;
        promptTokens: number;
    }, unknown>>;
    verdictJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type AgentTaskResultMetadata = z.infer<typeof AgentTaskResultMetadataSchema>;
//# sourceMappingURL=task-result-metadata.d.ts.map