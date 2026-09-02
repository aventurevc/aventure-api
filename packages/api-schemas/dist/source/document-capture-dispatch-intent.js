// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentModeSchema } from "../enrichment/mode.js";
const SourceDocumentCaptureDispatchIntentSchemaDefinition = z.object({
    /** Loop iteration cap. */
    maxIteration: z.int(),
    /** Parallel read-only scout fan-out width N. */
    maxScoutConcurrent: z.int(),
    mode: EnrichmentModeSchema,
    /** Orchestrator model id. */
    model: z.string().nullish(),
    /** Read-only research, cohort, and completion sub-agent model id. */
    subagentModel: z.string().nullish(),
    /** Selected task preset keys filed with the capture. */
    taskPresetKey: z.array(z.string()).nullish(),
    /** Optional upload-only steering prompt; never returned in capture metadata. */
    userPrompt: z.string().nullish(),
});
/**
 * @openapiSchema SourceDocumentCaptureDispatchIntent
 * @endpoint GET /v1/research/source-documents/{id}
 * @endpoint GET /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint POST /v1/research/source-documents
 * @endpoint PUT /v1/research/source-documents/client-captured-source/{documentId}
 * @endpoint DELETE /v1/research/source-documents/{id}
 * @endpoint DELETE /v1/research/source-documents/client-captured-source/{documentId}
 * @usedBySchema SourceDocumentClientCaptureSchema
 * @contractShape source.document-capture-dispatch-intent
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sourcedocument/SourceDocumentCapture.kt
 */
export const SourceDocumentCaptureDispatchIntentSchema = SourceDocumentCaptureDispatchIntentSchemaDefinition;
//# sourceMappingURL=document-capture-dispatch-intent.js.map