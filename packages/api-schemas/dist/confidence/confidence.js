// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Three-level confidence band for a classifier, model, or probe verdict. The carrying property states what is assessed and what each band licenses.
 *
 * @openapiSchema Confidence
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/media/logo-accuracy
 * @endpoint POST /v1/people/{personId}/content/search
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @usedBySchema AgentHelpSchema
 * @usedBySchema ContentSearchInterpretationSchema
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @usedBySchema LogoAccuracySchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @usedBySchema SearchInterpretationSchema
 * @contractShape confidence.confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/confidence/Confidence.kt
 */
export const ConfidenceSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
//# sourceMappingURL=confidence.js.map