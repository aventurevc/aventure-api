// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Browser CSP enforcement mode
 *
 * @openapiSchema ClerkScriptLoadCspDisposition
 * @endpoint POST /v1/observability/clerk-script-load
 * @usedBySchema ClerkScriptLoadEventSchema
 * @contractShape clerk.script-load-csp-disposition
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export const ClerkScriptLoadCspDispositionSchema = z.enum(["enforce", "report"]);
//# sourceMappingURL=script-load-csp-disposition.js.map