import { z } from "zod/v4";
declare const HarnessModelSchemaDefinition: z.ZodObject<{
    agentPosition: z.ZodNullable<z.ZodInt>;
    id: z.ZodString;
    microTaskPosition: z.ZodNullable<z.ZodInt>;
    subAgentPosition: z.ZodNullable<z.ZodInt>;
    vision: z.ZodBoolean;
    webSearch: z.ZodBoolean;
}, z.core.$strip>;
type HarnessModelDefinition = z.infer<typeof HarnessModelSchemaDefinition>;
/**
 * One configured harness model. A non-null role position makes the model eligible; position 1 is that role's default.
 *
 * @openapiSchema HarnessModel
 * @endpoint GET /v1/harness/models
 * @usedBySchema HarnessModelCatalogSchema
 * @contractShape harness.model
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessModel.kt
 */
export declare const HarnessModelSchema: z.ZodType<HarnessModelDefinition>;
export type HarnessModel = z.infer<typeof HarnessModelSchema>;
export {};
//# sourceMappingURL=model.d.ts.map