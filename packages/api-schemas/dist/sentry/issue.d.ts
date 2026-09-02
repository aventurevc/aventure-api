import { z } from "zod/v4";
declare const SentryIssueSchemaDefinition: z.ZodObject<{
    count: z.ZodInt;
    culprit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    datetime: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    enrichmentError: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enrichmentStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    environment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eventId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exceptionValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstSeen: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSeen: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    level: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodType<{
        filename?: string | null | undefined;
        function?: string | null | undefined;
        type?: string | null | undefined;
        value?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        filename?: string | null | undefined;
        function?: string | null | undefined;
        type?: string | null | undefined;
        value?: string | null | undefined;
    }, unknown>>;
    permalink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    platform: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    release: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestMethod: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shortId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    spanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    traceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userCount: z.ZodInt;
}, z.core.$strip>;
type SentryIssueDefinition = z.infer<typeof SentryIssueSchemaDefinition>;
/**
 * Sentry issue details
 *
 * @openapiSchema SentryIssue
 * @endpoint GET /v1/sentry/issues
 * @usedBySchema SentryIssuesSummarySchema
 * @contractShape sentry.issue
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryIssue.kt
 */
export declare const SentryIssueSchema: z.ZodType<SentryIssueDefinition>;
export type SentryIssue = z.infer<typeof SentryIssueSchema>;
export {};
//# sourceMappingURL=issue.d.ts.map