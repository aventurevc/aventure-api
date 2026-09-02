import { z } from "zod/v4";
declare const AgentTaskTranscriptSchemaDefinition: z.ZodObject<{
    attempt: z.ZodInt;
    availableAttempt: z.ZodArray<z.ZodInt>;
    result: z.ZodObject<{
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
    turn: z.ZodArray<z.ZodType<{
        argumentsJson?: string | null | undefined;
        completionTokens?: number | null | undefined;
        content?: string | null | undefined;
        finishReason?: string | null | undefined;
        model?: string | null | undefined;
        promptTokens?: number | null | undefined;
        resultJson?: string | null | undefined;
        role: string;
        statusCode?: number | null | undefined;
        successful?: boolean | null | undefined;
        toolCallId?: string | null | undefined;
        toolName?: string | null | undefined;
        toolPath?: string | null | undefined;
        turnIndex: number;
    }, unknown, z.core.$ZodTypeInternals<{
        argumentsJson?: string | null | undefined;
        completionTokens?: number | null | undefined;
        content?: string | null | undefined;
        finishReason?: string | null | undefined;
        model?: string | null | undefined;
        promptTokens?: number | null | undefined;
        resultJson?: string | null | undefined;
        role: string;
        statusCode?: number | null | undefined;
        successful?: boolean | null | undefined;
        toolCallId?: string | null | undefined;
        toolName?: string | null | undefined;
        toolPath?: string | null | undefined;
        turnIndex: number;
    }, unknown>>>;
}, z.core.$strip>;
type AgentTaskTranscriptDefinition = z.infer<typeof AgentTaskTranscriptSchemaDefinition>;
/**
 * Agent-task run header composed with its turns
 *
 * @openapiSchema AgentTaskTranscript
 * @endpoint GET /v1/jobs/runs/{runId}/transcript
 * @contractShape agent.task-transcript
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/AgentTaskTranscript.kt
 */
export declare const AgentTaskTranscriptSchema: z.ZodType<AgentTaskTranscriptDefinition>;
export type AgentTaskTranscript = z.infer<typeof AgentTaskTranscriptSchema>;
export {};
//# sourceMappingURL=task-transcript.d.ts.map