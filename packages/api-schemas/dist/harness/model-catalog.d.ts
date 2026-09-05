import { z } from "zod/v4";
declare const HarnessModelCatalogSchemaDefinition: z.ZodObject<{
    model: z.ZodArray<z.ZodType<{
        agentPosition: number | null;
        id: string;
        microTaskPosition: number | null;
        subAgentPosition: number | null;
        vision: boolean;
        webSearch: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        agentPosition: number | null;
        id: string;
        microTaskPosition: number | null;
        subAgentPosition: number | null;
        vision: boolean;
        webSearch: boolean;
    }, unknown>>>;
    taskVisionModel: z.ZodString;
}, z.core.$strip>;
type HarnessModelCatalogDefinition = z.infer<typeof HarnessModelCatalogSchemaDefinition>;
/**
 * Configured harness models and their role eligibility.
 *
 * @openapiSchema HarnessModelCatalog
 * @endpoint GET /v1/harness/models
 * @contractShape harness.model-catalog
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessModelCatalog.kt
 */
export declare const HarnessModelCatalogSchema: z.ZodType<HarnessModelCatalogDefinition>;
export type HarnessModelCatalog = z.infer<typeof HarnessModelCatalogSchema>;
export {};
//# sourceMappingURL=model-catalog.d.ts.map