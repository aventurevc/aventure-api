// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentHelpReindexResultSchemaDefinition = z.object({
    /** Documents embedded and upserted this run. */
    indexed: z.int(),
    /** Stale rows removed because their source no longer exists. */
    pruned: z.int(),
});
/**
 * Counts from an agent-help corpus reindex run.
 *
 * @openapiSchema AgentHelpReindexResult
 * @endpoint POST /v1/agents/help/reindex
 * @contractShape agent.help-reindex-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentHelpReindexResult.kt
 */
export const AgentHelpReindexResultSchema = AgentHelpReindexResultSchemaDefinition;
//# sourceMappingURL=help-reindex-result.js.map