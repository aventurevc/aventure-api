import { z } from "zod/v4";
declare const ClerkScriptLoadEventSchemaDefinition: z.ZodObject<{
    applicationRevision: z.ZodString;
    cspDisposition: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        enforce: "enforce";
        report: "report";
    }>>>;
    cspEffectiveDirective: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "script-src": "script-src";
        "script-src-attr": "script-src-attr";
        "script-src-elem": "script-src-elem";
    }>>>;
    cspPolicyFingerprint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cspSourceHost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventType: z.ZodEnum<{
        failure: "failure";
        sampledSuccess: "sampledSuccess";
    }>;
    failureClassification: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "csp-violation-observed": "csp-violation-observed";
        "http-client-error": "http-client-error";
        "http-server-error": "http-server-error";
        "load-timeout-no-global": "load-timeout-no-global";
        "resource-entry-missing": "resource-entry-missing";
        "response-ok-no-global": "response-ok-no-global";
        "unexplained-cause": "unexplained-cause";
        "zero-byte-transfer": "zero-byte-transfer";
    }>>>;
}, z.core.$strip>;
type ClerkScriptLoadEventDefinition = z.infer<typeof ClerkScriptLoadEventSchemaDefinition>;
/**
 * Privacy-bounded browser telemetry for a terminal ClerkJS load failure or a sampled successful load. URLs, CSP policy text, nonces, credentials, and user data are not accepted.
 *
 * @openapiSchema ClerkScriptLoadEvent
 * @endpoint POST /v1/observability/clerk-script-load
 * @contractShape clerk.script-load-event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export declare const ClerkScriptLoadEventSchema: z.ZodType<ClerkScriptLoadEventDefinition>;
export type ClerkScriptLoadEvent = z.infer<typeof ClerkScriptLoadEventSchema>;
export {};
//# sourceMappingURL=script-load-event.d.ts.map