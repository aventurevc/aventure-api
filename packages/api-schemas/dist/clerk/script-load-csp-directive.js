// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Script directive reported by the browser CSP violation event
 *
 * @openapiSchema ClerkScriptLoadCspDirective
 * @endpoint POST /v1/observability/clerk-script-load
 * @usedBySchema ClerkScriptLoadEventSchema
 * @contractShape clerk.script-load-csp-directive
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export const ClerkScriptLoadCspDirectiveSchema = z.enum([
    "script-src",
    "script-src-attr",
    "script-src-elem",
]);
//# sourceMappingURL=script-load-csp-directive.js.map