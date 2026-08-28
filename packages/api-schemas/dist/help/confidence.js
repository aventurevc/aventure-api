// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Confidence the answer is fully supported by the cited corpus. LOW signals an abstention.
 *
 * @openapiSchema HelpConfidence
 * @endpoint POST /v1/agents/help
 * @usedBySchema AgentHelpSchema
 * @contractShape help.confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/agent/AgentHelp.kt
 */
export const HelpConfidenceSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
//# sourceMappingURL=confidence.js.map