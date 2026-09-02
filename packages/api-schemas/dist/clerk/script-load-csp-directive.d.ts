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
export declare const ClerkScriptLoadCspDirectiveSchema: z.ZodEnum<{
    "script-src": "script-src";
    "script-src-attr": "script-src-attr";
    "script-src-elem": "script-src-elem";
}>;
export type ClerkScriptLoadCspDirective = z.infer<typeof ClerkScriptLoadCspDirectiveSchema>;
//# sourceMappingURL=script-load-csp-directive.d.ts.map