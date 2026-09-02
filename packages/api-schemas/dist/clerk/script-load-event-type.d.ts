import { z } from "zod/v4";
/**
 * Terminal ClerkJS browser load outcome
 *
 * @openapiSchema ClerkScriptLoadEventType
 * @endpoint POST /v1/observability/clerk-script-load
 * @usedBySchema ClerkScriptLoadEventSchema
 * @contractShape clerk.script-load-event-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/observability/ClerkScriptLoadEvent.kt
 */
export declare const ClerkScriptLoadEventTypeSchema: z.ZodEnum<{
    failure: "failure";
    sampledSuccess: "sampledSuccess";
}>;
export type ClerkScriptLoadEventType = z.infer<typeof ClerkScriptLoadEventTypeSchema>;
//# sourceMappingURL=script-load-event-type.d.ts.map