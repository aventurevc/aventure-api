import { z } from "zod/v4";
declare const AgentHelpReindexResultSchemaDefinition: z.ZodObject<{
    indexed: z.ZodInt;
    pruned: z.ZodInt;
}, z.core.$strip>;
type AgentHelpReindexResultDefinition = z.infer<typeof AgentHelpReindexResultSchemaDefinition>;
/**
 * Counts from an agent-help corpus reindex run.
 *
 * @openapiSchema AgentHelpReindexResult
 * @endpoint POST /v1/agents/help/reindex
 * @contractShape agent.help-reindex-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentHelpReindexResult.kt
 */
export declare const AgentHelpReindexResultSchema: z.ZodType<AgentHelpReindexResultDefinition>;
export type AgentHelpReindexResult = z.infer<typeof AgentHelpReindexResultSchema>;
export {};
//# sourceMappingURL=help-reindex-result.d.ts.map