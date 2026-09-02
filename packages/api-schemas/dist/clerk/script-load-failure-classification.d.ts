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
export declare const ClerkScriptLoadFailureClassificationSchema: z.ZodEnum<{
    "csp-violation-observed": "csp-violation-observed";
    "http-client-error": "http-client-error";
    "http-server-error": "http-server-error";
    "load-timeout-no-global": "load-timeout-no-global";
    "resource-entry-missing": "resource-entry-missing";
    "response-ok-no-global": "response-ok-no-global";
    "unexplained-cause": "unexplained-cause";
    "zero-byte-transfer": "zero-byte-transfer";
}>;
export type ClerkScriptLoadFailureClassification = z.infer<typeof ClerkScriptLoadFailureClassificationSchema>;
//# sourceMappingURL=script-load-failure-classification.d.ts.map