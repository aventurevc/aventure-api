import { z } from "zod/v4";
declare const SentryStackFrameSchemaDefinition: z.ZodObject<{
    absPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    colNo: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    filename: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    function: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    inApp: z.ZodBoolean;
    lineNo: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    module: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SentryStackFrameDefinition = z.infer<typeof SentryStackFrameSchemaDefinition>;
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
export declare const SentryStackFrameSchema: z.ZodType<SentryStackFrameDefinition>;
export type SentryStackFrame = z.infer<typeof SentryStackFrameSchema>;
export {};
//# sourceMappingURL=stack-frame.d.ts.map