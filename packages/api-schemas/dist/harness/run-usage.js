// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AgentInstructionSchema } from "../agent/instruction.js";
import { HarnessRunPromptAttributionSchema } from "./run-prompt-attribution.js";
import { HarnessRunRoleUsageSchema } from "./run-role-usage.js";
import { HarnessRunSubagentUsageSchema } from "./run-subagent-usage.js";
const HarnessRunUsageSchemaDefinition = z.object({
    /** Orchestrator (agent) model token and cost total */
    agent: HarnessRunRoleUsageSchema,
    /** Manifest-pinned instruction documents (skills, sub-agents) the run loaded, each carrying its content hash (sha256-12) as version. Resolves to the immutable document at /v1/agents/instructions/{kind}/{name}/versions/{version}. */
    instruction: z.array(AgentInstructionSchema).optional(),
    /** Langfuse session link for the run (run id is the session id); null when tracing is unconfigured */
    langfuseSessionUrl: z.string().nullish(),
    /** Langfuse trace link for the run's single trace; null when tracing is unconfigured */
    langfuseTraceUrl: z.string().nullish(),
    /** Prompt attribution: tokenizer estimates per added document plus an optional legacy first-turn input proxy retained only for historical runs. */
    promptAttribution: HarnessRunPromptAttributionSchema.nullish(),
    /** Folded sub-agent model token and cost total */
    subagent: HarnessRunRoleUsageSchema,
    /** Per-sub-agent token total, one entry per distinct sub-agent the run spawned, keyed by its agent id. Joins to a run's agent tabs by matching ccAgentId to the sub-agent task id. Empty for runs with no sub-agent traffic or a Langfuse-only ledger. */
    subagentUsage: z.array(HarnessRunSubagentUsageSchema).optional(),
});
/**
 * A harness run's token and cost usage split by role
 *
 * @openapiSchema HarnessRunUsage
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @contractShape harness.run-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunUsageSchema = HarnessRunUsageSchemaDefinition;
//# sourceMappingURL=run-usage.js.map