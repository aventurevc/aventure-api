import { z } from "zod/v4";
declare const CursorSliceHarnessRunSchemaDefinition: z.ZodObject<{
    content: z.ZodArray<z.ZodType<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        attempt: number;
        chainRunId?: string | null | undefined;
        createdAt: string;
        entitySlug?: string | null | undefined;
        environment: "development" | "production" | "staging" | "unassigned";
        error?: string | null | undefined;
        failureClass?: string | null | undefined;
        finishedAt?: string | null | undefined;
        hasSourceDocument: boolean;
        id: string;
        idempotencyKey?: string | null | undefined;
        instructionPointer?: string | null | undefined;
        iteration: number;
        latestStatus?: string | null | undefined;
        lockedAt?: string | null | undefined;
        lockedBy?: string | null | undefined;
        maxIteration: number;
        maxScoutConcurrent: number;
        mode: "COMPREHENSIVE" | "INDIVIDUAL";
        model: string;
        nextAttemptAt?: string | null | undefined;
        ownerUserId?: string | null | undefined;
        resumeSafeUntil?: string | null | undefined;
        sessionResume?: string | null | undefined;
        sourceDocumentId?: string | null | undefined;
        startedAt?: string | null | undefined;
        status: "completed" | "failed" | "queued" | "running" | "stopped";
        subagentModel: string;
        taskKey?: string | null | undefined;
        taskPhase?: "FINAL" | "PRIMARY" | null | undefined;
        taskPresetKey?: string[] | null | undefined;
        type: "ENRICHMENT" | "TASK";
        updatedAt: string;
        url: string;
        usageSnapshot?: string | null | undefined;
        userPrompt?: string | null | undefined;
    }, unknown>>>;
    nextCursor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type CursorSliceHarnessRunDefinition = z.infer<typeof CursorSliceHarnessRunSchemaDefinition>;
/**
 * @openapiSchema CursorSliceHarnessRun
 * @endpoint GET /v1/harness/control-plane/runs/usage-recovery-candidates
 * @contractShape cursor.slice-harness-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/CursorPage.kt
 */
export declare const CursorSliceHarnessRunSchema: z.ZodType<CursorSliceHarnessRunDefinition>;
export type CursorSliceHarnessRun = z.infer<typeof CursorSliceHarnessRunSchema>;
export {};
//# sourceMappingURL=slice-harness-run.d.ts.map