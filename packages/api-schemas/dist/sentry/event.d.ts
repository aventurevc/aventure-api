import { z } from "zod/v4";
declare const SentryEventSchemaDefinition: z.ZodObject<{
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    event: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        breadcrumb: z.ZodArray<z.ZodType<{
            category?: string | null | undefined;
            data: Record<string, string>;
            level?: string | null | undefined;
            message?: string | null | undefined;
            timestamp?: number | null | undefined;
            type?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            category?: string | null | undefined;
            data: Record<string, string>;
            level?: string | null | undefined;
            message?: string | null | undefined;
            timestamp?: number | null | undefined;
            type?: string | null | undefined;
        }, unknown>>>;
        clientRequestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        culprit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        datetime: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        environment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exceptionMechanism: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exceptionModule: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exceptionType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        exceptionValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        feId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        handled: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        inAppFilename: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inAppFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        inAppLine: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        inAppModule: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        level: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadataFilename: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadataFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadataType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        metadataValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        parentSpanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        platform: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        release: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requestHeaders: z.ZodRecord<z.ZodString, z.ZodString>;
        requestMethod: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requestQueryString: z.ZodRecord<z.ZodString, z.ZodString>;
        requestUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        runtime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sdkName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sdkVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        serverName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        spanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        springProfiles: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        stackFrame: z.ZodArray<z.ZodType<{
            absPath?: string | null | undefined;
            category?: string | null | undefined;
            colNo?: number | null | undefined;
            filename?: string | null | undefined;
            function?: string | null | undefined;
            inApp: boolean;
            lineNo?: number | null | undefined;
            module?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            absPath?: string | null | undefined;
            category?: string | null | undefined;
            colNo?: number | null | undefined;
            filename?: string | null | undefined;
            function?: string | null | undefined;
            inApp: boolean;
            lineNo?: number | null | undefined;
            module?: string | null | undefined;
        }, unknown>>>;
        tag: z.ZodArray<z.ZodType<{
            tagKey: string;
            tagValue: string;
        }, unknown, z.core.$ZodTypeInternals<{
            tagKey: string;
            tagValue: string;
        }, unknown>>>;
        taggedTransaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        taggedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tagTraceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        traceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        traceOp: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        traceStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        transaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
type SentryEventDefinition = z.infer<typeof SentryEventSchemaDefinition>;
/**
 * Sentry event response
 *
 * @openapiSchema SentryEvent
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @contractShape sentry.event
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryEvent.kt
 */
export declare const SentryEventSchema: z.ZodType<SentryEventDefinition>;
export type SentryEvent = z.infer<typeof SentryEventSchema>;
export {};
//# sourceMappingURL=event.d.ts.map