// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentInstructionPointerSchemaDefinition = z.object({
    /** Object key under the agents/ prefix */
    key: z.string(),
    /** Immutable content version (sha256-12) */
    version: z.string(),
});
/**
 * One manifest entry: immutable version id and the full object key it resolves to.
 *
 * @openapiSchema AgentInstructionPointer
 * @endpoint GET /v1/agents/instructions
 * @usedBySchema AgentInstructionManifestSchema
 * @contractShape agent.instruction-pointer
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentInstruction.kt
 */
export const AgentInstructionPointerSchema = AgentInstructionPointerSchemaDefinition;
//# sourceMappingURL=instruction-pointer.js.map