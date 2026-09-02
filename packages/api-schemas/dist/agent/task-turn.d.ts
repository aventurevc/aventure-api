import { z } from "zod/v4";
declare const AgentTaskTurnSchemaDefinition: z.ZodObject<{
    argumentsJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completionTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptTokens: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    resultJson: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodString;
    statusCode: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    successful: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    toolCallId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    toolName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    toolPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    turnIndex: z.ZodInt;
}, z.core.$strip>;
type AgentTaskTurnDefinition = z.infer<typeof AgentTaskTurnSchemaDefinition>;
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
export declare const AgentTaskTurnSchema: z.ZodType<AgentTaskTurnDefinition>;
export type AgentTaskTurn = z.infer<typeof AgentTaskTurnSchema>;
export {};
//# sourceMappingURL=task-turn.d.ts.map