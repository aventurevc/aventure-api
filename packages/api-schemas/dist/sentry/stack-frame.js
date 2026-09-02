// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SentryStackFrameSchemaDefinition = z.object({
    absPath: z.string().nullish(),
    category: z.string().nullish(),
    colNo: z.int().nullish(),
    filename: z.string().nullish(),
    function: z.string().nullish(),
    inApp: z.boolean(),
    lineNo: z.int().nullish(),
    module: z.string().nullish(),
});
/**
 * Exception stack frame
 *
 * @openapiSchema SentryStackFrame
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventDetailSchema
 * @contractShape sentry.stack-frame
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryStackFrame.kt
 */
export const SentryStackFrameSchema = SentryStackFrameSchemaDefinition;
//# sourceMappingURL=stack-frame.js.map