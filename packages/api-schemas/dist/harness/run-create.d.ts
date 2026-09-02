import { z } from "zod/v4";
declare const HarnessRunCreateSchemaDefinition: z.ZodObject<{
    maxIteration: z.ZodOptional<z.ZodInt>;
    maxScoutConcurrent: z.ZodOptional<z.ZodInt>;
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subagentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    url: z.ZodString;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunCreateDefinition = z.infer<typeof HarnessRunCreateSchemaDefinition>;
/**
 * Create one harness enrichment run
 *
 * @openapiSchema HarnessRunCreate
 * @endpoint POST /v1/harness/control-plane/runs
 * @contractShape harness.run-create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRun.kt
 */
export declare const HarnessRunCreateSchema: z.ZodType<HarnessRunCreateDefinition>;
export type HarnessRunCreate = z.infer<typeof HarnessRunCreateSchema>;
export {};
//# sourceMappingURL=run-create.d.ts.map