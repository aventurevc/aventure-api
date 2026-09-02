// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClerkScriptLoadCspDirectiveSchema } from "./script-load-csp-directive.js";
import { ClerkScriptLoadCspDispositionSchema } from "./script-load-csp-disposition.js";
import { ClerkScriptLoadEventTypeSchema } from "./script-load-event-type.js";
import { ClerkScriptLoadFailureClassificationSchema } from "./script-load-failure-classification.js";
const ClerkScriptLoadEventSchemaDefinition = z.object({
    /** Bounded front-end deployment revision, normally the Sentry release */
    applicationRevision: z
        .string()
        .regex(/^[A-Za-z0-9](?:[A-Za-z0-9._@+-]{0,126}[A-Za-z0-9])?$/)
        .min(1)
        .max(128),
    /** CSP enforcement mode observed for a CSP-classified failure */
    cspDisposition: ClerkScriptLoadCspDispositionSchema.nullish(),
    /** Effective script directive observed for a CSP-classified failure */
    cspEffectiveDirective: ClerkScriptLoadCspDirectiveSchema.nullish(),
    /** FNV-1a fingerprint of nonce-normalized CSP policy text; never the policy itself */
    cspPolicyFingerprint: z
        .string()
        .regex(/^[0-9a-f]{16}$/)
        .min(16)
        .max(16)
        .nullish(),
    /** Optional source hostname, admitted only when it matches the request origin or configured Clerk issuer */
    cspSourceHost: z
        .string()
        .regex(/^[A-Za-z0-9](?:[A-Za-z0-9.-]{0,251}[A-Za-z0-9])?$/)
        .min(1)
        .max(253)
        .nullish(),
    /** Terminal browser outcome represented by this event */
    eventType: ClerkScriptLoadEventTypeSchema,
    /** Closed failure classification; required only for failure events */
    failureClassification: ClerkScriptLoadFailureClassificationSchema.nullish(),
});
/**
 * Privacy-bounded browser telemetry for a terminal ClerkJS load failure or a sampled successful load. URLs, CSP policy text, nonces, credentials, and user data are not accepted.
 *
 * @openapiSchema ClerkScriptLoadEvent
 * @endpoint POST /v1/observability/clerk-script-load
 * @contractShape clerk.script-load-event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export const ClerkScriptLoadEventSchema = ClerkScriptLoadEventSchemaDefinition;
//# sourceMappingURL=script-load-event.js.map