// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
const HarnessRunCreateSchemaDefinition = z.object({
    /** Loop iteration cap */
    maxIteration: z.int().optional(),
    /** Parallel scout fan-out width N */
    maxScoutConcurrent: z.int().optional(),
    /** Enrichment breadth. Omitted by older clients to request the comprehensive default. */
    mode: EnrichmentModeSchema.optional(),
    /** Optional orchestrator model override; omitted uses the configured role default */
    model: z.string().nullish(),
    /** Optional read-only sub-agent model override; omitted uses the configured role default */
    subagentModel: z.string().nullish(),
    /** Bounded micro-task key for a single-pass task run: an agent-task key (e.g. entity-delete) or a MICRO task-preset key (e.g. delete-entity), normalized to the agent-task key at create; unknown keys and FULL preset keys are rejected 400. Omit/null for a full enrichment run. */
    taskKey: z.string().nullish(),
    /** Selected task preset keys that scoped or emphasized this run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Company URL to enrich */
    url: z.string(),
    /** Optional steering prompt */
    userPrompt: z.string().nullish(),
});
/**
 * Create one harness enrichment run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/harness/control-plane/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export const HarnessRunCreateSchema = HarnessRunCreateSchemaDefinition;
//# sourceMappingURL=run-create.js.map