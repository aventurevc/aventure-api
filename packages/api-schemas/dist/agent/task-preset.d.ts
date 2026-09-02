import { z } from "zod/v4";
declare const AgentTaskPresetSchemaDefinition: z.ZodObject<{
    agentTaskKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    execution: z.ZodEnum<{
        FULL: "FULL";
        MICRO: "MICRO";
    }>;
    key: z.ZodString;
    name: z.ZodString;
    phase: z.ZodEnum<{
        FINAL: "FINAL";
        PRIMARY: "PRIMARY";
    }>;
    prompt: z.ZodString;
}, z.core.$strip>;
type AgentTaskPresetDefinition = z.infer<typeof AgentTaskPresetSchemaDefinition>;
/**
 * Operator-selectable enrichment task prompt owned by the agent-task catalog.
 *
 * @openapiSchema AgentTaskPreset
 * @endpoint GET /v1/jobs/agent-tasks/task-presets
 * @usedBySchema AgentTaskPresetCatalogSchema
 * @contractShape agent.task-preset
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/agenttask/AgentTaskPreset.kt
 */
export declare const AgentTaskPresetSchema: z.ZodType<AgentTaskPresetDefinition>;
export type AgentTaskPreset = z.infer<typeof AgentTaskPresetSchema>;
export {};
//# sourceMappingURL=task-preset.d.ts.map