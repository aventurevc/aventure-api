// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SentryBreadcrumbSchema } from "./breadcrumb.js";
import { SentryStackFrameSchema } from "./stack-frame.js";
import { SentryTagSchema } from "./tag.js";
/**
 * Sentry event detail
 *
 * @openapiSchema SentryEventDetail
 * @endpoint GET /v1/sentry/issues/{issueId}/event
 * @usedBySchema SentryEventSchema
 * @contractShape sentry.event-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryEventDetail.kt
 */
export const SentryEventDetailSchema = z.object({
    breadcrumb: z.array(SentryBreadcrumbSchema),
    clientRequestId: z.string().nullish(),
    correlationId: z.string().nullish(),
    culprit: z.string().nullish(),
    datetime: z.iso.datetime({ offset: true }).nullish(),
    environment: z.string().nullish(),
    eventId: z.string().nullish(),
    exceptionMechanism: z.string().nullish(),
    exceptionModule: z.string().nullish(),
    exceptionType: z.string().nullish(),
    exceptionValue: z.string().nullish(),
    feId: z.string().nullish(),
    handled: z.boolean().nullish(),
    inAppFilename: z.string().nullish(),
    inAppFunction: z.string().nullish(),
    inAppLine: z.int().nullish(),
    inAppModule: z.string().nullish(),
    level: z.string().nullish(),
    metadataFilename: z.string().nullish(),
    metadataFunction: z.string().nullish(),
    metadataType: z.string().nullish(),
    metadataValue: z.string().nullish(),
    parentSpanId: z.string().nullish(),
    platform: z.string().nullish(),
    release: z.string().nullish(),
    requestHeaders: z.record(z.string(), z.string()),
    requestMethod: z.string().nullish(),
    requestQueryString: z.record(z.string(), z.string()),
    requestUrl: z.string().nullish(),
    runtime: z.string().nullish(),
    sdkName: z.string().nullish(),
    sdkVersion: z.string().nullish(),
    serverName: z.string().nullish(),
    spanId: z.string().nullish(),
    springProfiles: z.string().nullish(),
    stackFrame: z.array(SentryStackFrameSchema),
    tag: z.array(SentryTagSchema),
    taggedTransaction: z.string().nullish(),
    taggedUrl: z.string().nullish(),
    tagTraceId: z.string().nullish(),
    timestamp: z.number().nullish(),
    title: z.string().nullish(),
    traceId: z.string().nullish(),
    traceOp: z.string().nullish(),
    traceStatus: z.string().nullish(),
    transaction: z.string().nullish(),
    type: z.string().nullish(),
    url: z.string().nullish(),
});
//# sourceMappingURL=event-detail.js.map