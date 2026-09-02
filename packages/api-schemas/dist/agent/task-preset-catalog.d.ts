import { z } from "zod/v4";
declare const AgentTaskPresetCatalogSchemaDefinition: z.ZodObject<{
    taskPreset: z.ZodArray<z.ZodType<{
        agentTaskKey?: string | null | undefined;
        execution: "FULL" | "MICRO";
        key: string;
        name: string;
        phase: "FINAL" | "PRIMARY";
        prompt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        agentTaskKey?: string | null | undefined;
        execution: "FULL" | "MICRO";
        key: string;
        name: string;
        phase: "FINAL" | "PRIMARY";
        prompt: string;
    }, unknown>>>;
}, z.core.$strip>;
type AgentTaskPresetCatalogDefinition = z.infer<typeof AgentTaskPresetCatalogSchemaDefinition>;
/**
 * Configured agent-task preset catalog.
 *
 * @openapiSchema AgentTaskPresetCatalog
 * @endpoint GET /v1/jobs/agent-tasks/task-presets
 * @contractShape agent.task-preset-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/agenttask/AgentTaskPreset.kt
 */
export declare const AgentTaskPresetCatalogSchema: z.ZodType<AgentTaskPresetCatalogDefinition>;
export type AgentTaskPresetCatalog = z.infer<typeof AgentTaskPresetCatalogSchema>;
export {};
//# sourceMappingURL=task-preset-catalog.d.ts.map