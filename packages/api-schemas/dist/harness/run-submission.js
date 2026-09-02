// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
const HarnessRunSubmissionSchemaDefinition = z.object({
    /** Enrichment breadth. Omitted by older clients to request the comprehensive default. */
    mode: EnrichmentModeSchema.optional(),
    /** Optional orchestrator model override; omitted uses the configured role default */
    model: z.string().nullish(),
    /** Selected task preset keys that scoped or emphasized this run */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Company URL to enrich */
    url: z.string(),
    /** Optional steering prompt */
    userPrompt: z.string().nullish(),
});
/**
 * Submit one authenticated principal-owned harness enrichment run
 *
 * @openapiSchema HarnessRunSubmission
 * @endpoint POST /v1/harness/runs/submissions
 * @contractShape harness.run-submission
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunSubmission.kt
 */
export const HarnessRunSubmissionSchema = HarnessRunSubmissionSchemaDefinition;
//# sourceMappingURL=run-submission.js.map