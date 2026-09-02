// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunRoleUsageSchema } from "./run-role-usage.js";
const HarnessRunSubagentUsageSchemaDefinition = z.object({
    /** Claude Code sub-agent id (== the SDK task id); the join key to a tab */
    ccAgentId: z.string(),
    /** Assistant turns this role consumed; null until the harness reports turns */
    turn: z.int().nullish(),
    /** This sub-agent's token and cost total */
    usage: HarnessRunRoleUsageSchema,
});
/**
 * One sub-agent's token total within a run
 *
 * @openapiSchema HarnessRunSubagentUsage
 * @endpoint GET /v1/harness/control-plane/runs/{runId}/usage
 * @endpoint GET /v1/harness/runs/{runId}/usage
 * @usedBySchema HarnessRunUsageSchema
 * @contractShape harness.run-subagent-usage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunUsage.kt
 */
export const HarnessRunSubagentUsageSchema = HarnessRunSubagentUsageSchemaDefinition;
//# sourceMappingURL=run-subagent-usage.js.map