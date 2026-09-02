import { z } from "zod/v4";
declare const SentryIssuesSummarySchemaDefinition: z.ZodObject<{
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    issue: z.ZodArray<z.ZodType<{
        count: number;
        culprit?: string | null | undefined;
        datetime?: string | null | undefined;
        enrichmentError?: string | null | undefined;
        enrichmentStatus?: string | null | undefined;
        environment?: string | null | undefined;
        eventId?: string | null | undefined;
        exceptionType?: string | null | undefined;
        exceptionValue?: string | null | undefined;
        firstSeen?: string | null | undefined;
        id?: string | null | undefined;
        lastSeen?: string | null | undefined;
        level?: string | null | undefined;
        metadata: {
            filename?: string | null | undefined;
            function?: string | null | undefined;
            type?: string | null | undefined;
            value?: string | null | undefined;
        };
        permalink?: string | null | undefined;
        platform?: string | null | undefined;
        release?: string | null | undefined;
        requestMethod?: string | null | undefined;
        requestUrl?: string | null | undefined;
        shortId?: string | null | undefined;
        spanId?: string | null | undefined;
        status?: string | null | undefined;
        timestamp?: number | null | undefined;
        title?: string | null | undefined;
        traceId?: string | null | undefined;
        transaction?: string | null | undefined;
        type?: string | null | undefined;
        url?: string | null | undefined;
        userCount: number;
    }, unknown, z.core.$ZodTypeInternals<{
        count: number;
        culprit?: string | null | undefined;
        datetime?: string | null | undefined;
        enrichmentError?: string | null | undefined;
        enrichmentStatus?: string | null | undefined;
        environment?: string | null | undefined;
        eventId?: string | null | undefined;
        exceptionType?: string | null | undefined;
        exceptionValue?: string | null | undefined;
        firstSeen?: string | null | undefined;
        id?: string | null | undefined;
        lastSeen?: string | null | undefined;
        level?: string | null | undefined;
        metadata: {
            filename?: string | null | undefined;
            function?: string | null | undefined;
            type?: string | null | undefined;
            value?: string | null | undefined;
        };
        permalink?: string | null | undefined;
        platform?: string | null | undefined;
        release?: string | null | undefined;
        requestMethod?: string | null | undefined;
        requestUrl?: string | null | undefined;
        shortId?: string | null | undefined;
        spanId?: string | null | undefined;
        status?: string | null | undefined;
        timestamp?: number | null | undefined;
        title?: string | null | undefined;
        traceId?: string | null | undefined;
        transaction?: string | null | undefined;
        type?: string | null | undefined;
        url?: string | null | undefined;
        userCount: number;
    }, unknown>>>;
    project: z.ZodString;
    requestedProject: z.ZodString;
    total: z.ZodInt;
}, z.core.$strip>;
type SentryIssuesSummaryDefinition = z.infer<typeof SentryIssuesSummarySchemaDefinition>;
/**
 * Sentry issue response
 *
 * @openapiSchema SentryIssuesSummary
 * @endpoint GET /v1/sentry/issues
 * @contractShape sentry.issues-summary
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryIssuesSummary.kt
 */
export declare const SentryIssuesSummarySchema: z.ZodType<SentryIssuesSummaryDefinition>;
export type SentryIssuesSummary = z.infer<typeof SentryIssuesSummarySchema>;
export {};
//# sourceMappingURL=issues-summary.d.ts.map