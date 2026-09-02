import { z } from "zod/v4";
declare const HarnessRunSubmissionSchemaDefinition: z.ZodObject<{
    mode: z.ZodOptional<z.ZodEnum<{
        COMPREHENSIVE: "COMPREHENSIVE";
        INDIVIDUAL: "INDIVIDUAL";
    }>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taskPresetKey: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    url: z.ZodString;
    userPrompt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunSubmissionDefinition = z.infer<typeof HarnessRunSubmissionSchemaDefinition>;
/**
 * Submit one authenticated principal-owned harness enrichment run
 *
 * @openapiSchema HarnessRunSubmission
 * @endpoint POST /v1/harness/runs/submissions
 * @contractShape harness.run-submission
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunSubmission.kt
 */
export declare const HarnessRunSubmissionSchema: z.ZodType<HarnessRunSubmissionDefinition>;
export type HarnessRunSubmission = z.infer<typeof HarnessRunSubmissionSchema>;
export {};
//# sourceMappingURL=run-submission.d.ts.map