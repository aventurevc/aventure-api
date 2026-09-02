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
export declare const ClerkScriptLoadCspDispositionSchema: z.ZodEnum<{
    enforce: "enforce";
    report: "report";
}>;
export type ClerkScriptLoadCspDisposition = z.infer<typeof ClerkScriptLoadCspDispositionSchema>;
//# sourceMappingURL=script-load-csp-disposition.d.ts.map