// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentTaskPresetPhaseSchema } from "./task-preset-phase.js";
const AgentTaskPresetSchemaDefinition = z.object({
    /** For MICRO presets, the agent-task catalog key the client invokes directly via the harness engine POST /agent-tasks/{key}/run route; null for FULL presets. */
    agentTaskKey: z.string().nullish(),
    /** Execution route: FULL composes the preset into the harness enrichment loop; MICRO routes the client directly to the bounded agent-task named by agentTaskKey. */
    execution: z.enum(["FULL", "MICRO"]),
    /** Stable catalog key submitted on an agent-task invocation. */
    key: z.string(),
    /** Human-readable task name shown in operator controls. */
    name: z.string(),
    /** Dispatch phase for intra-job ordering: PRIMARY presets run first; FINAL presets defer until the primary wave completes so they read the freshly-updated entity dossier. */
    phase: AgentTaskPresetPhaseSchema,
    /** Exact server-owned task prompt prepended to the submitted URL/user prompt. */
    prompt: z.string(),
});
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
export const AgentTaskPresetSchema = AgentTaskPresetSchemaDefinition;
//# sourceMappingURL=task-preset.js.map