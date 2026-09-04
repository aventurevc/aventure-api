import { z } from "zod/v4";
declare const AgentChassisCatalogSchemaDefinition: z.ZodObject<{
    chassis: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type AgentChassisCatalogDefinition = z.infer<typeof AgentChassisCatalogSchemaDefinition>;
/**
 * Agent runtime chassis tokens accepted by the authenticated API.
 *
 * @openapiSchema AgentChassisCatalog
 * @endpoint GET /v1/agents/chassis
 * @contractShape agent.chassis-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/AgentChassisCatalog.kt
 */
export declare const AgentChassisCatalogSchema: z.ZodType<AgentChassisCatalogDefinition>;
export type AgentChassisCatalog = z.infer<typeof AgentChassisCatalogSchema>;
export {};
//# sourceMappingURL=chassis-catalog.d.ts.map