// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AgentChassisCatalogSchemaDefinition = z.object({
    /** Accepted agent chassis tokens, sorted lexicographically. */
    chassis: z.array(z.string()),
});
/**
 * Agent runtime chassis tokens accepted by the authenticated API.
 *
 * @openapiSchema AgentChassisCatalog
 * @endpoint GET /v1/agents/chassis
 * @contractShape agent.chassis-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/AgentChassisCatalog.kt
 */
export const AgentChassisCatalogSchema = AgentChassisCatalogSchemaDefinition;
//# sourceMappingURL=chassis-catalog.js.map