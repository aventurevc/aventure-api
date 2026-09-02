// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Closed browser-evidence classification for a terminal ClerkJS load failure
 *
 * @openapiSchema ClerkScriptLoadFailureClassification
 * @endpoint POST /v1/observability/clerk-script-load
 * @usedBySchema ClerkScriptLoadEventSchema
 * @contractShape clerk.script-load-failure-classification
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export const ClerkScriptLoadFailureClassificationSchema = z.enum([
    "load-timeout-no-global",
    "unexplained-cause",
    "csp-violation-observed",
    "resource-entry-missing",
    "http-client-error",
    "http-server-error",
    "zero-byte-transfer",
    "response-ok-no-global",
]);
//# sourceMappingURL=script-load-failure-classification.js.map