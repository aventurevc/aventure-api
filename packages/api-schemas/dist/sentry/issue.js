// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SentryIssueMetadataSchema } from "./issue-metadata.js";
const SentryIssueSchemaDefinition = z.object({
    /** Number of events */
    count: z.int(),
    /** Where error occurred */
    culprit: z.string().nullish(),
    /** Event datetime */
    datetime: z.iso.datetime({ offset: true }).nullish(),
    /** Error message when enrichment failed or timed out */
    enrichmentError: z.string().nullish(),
    /** Enrichment status: success, timeout, failed, or skipped */
    enrichmentStatus: z.string().nullish(),
    /** Environment from latest event */
    environment: z.string().nullish(),
    /** Event ID from latest event */
    eventId: z.string().nullish(),
    /** Exception type from event */
    exceptionType: z.string().nullish(),
    /** Exception message from event */
    exceptionValue: z.string().nullish(),
    /** First observed */
    firstSeen: z.iso.datetime({ offset: true }).nullish(),
    /** Internal Sentry issue ID */
    id: z.string().nullish(),
    /** Last observed */
    lastSeen: z.iso.datetime({ offset: true }).nullish(),
    /** Severity level */
    level: z.string().nullish(),
    /** Issue exception metadata */
    metadata: SentryIssueMetadataSchema,
    /** Link to Sentry UI */
    permalink: z.string().nullish(),
    /** Platform */
    platform: z.string().nullish(),
    /** Release from latest event */
    release: z.string().nullish(),
    /** HTTP request method */
    requestMethod: z.string().nullish(),
    /** HTTP request URL */
    requestUrl: z.string().nullish(),
    /** Human-readable issue ID */
    shortId: z.string().nullish(),
    /** Span ID for distributed tracing */
    spanId: z.string().nullish(),
    /** Issue status */
    status: z.string().nullish(),
    /** Event timestamp in epoch seconds */
    timestamp: z.number().nullish(),
    /** Error message (truncated) */
    title: z.string().nullish(),
    /** Trace ID for distributed tracing */
    traceId: z.string().nullish(),
    /** Transaction from latest event */
    transaction: z.string().nullish(),
    /** Issue type */
    type: z.string().nullish(),
    /** URL from latest event */
    url: z.string().nullish(),
    /** Affected users */
    userCount: z.int(),
});
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
export const SentryIssueSchema = SentryIssueSchemaDefinition;
//# sourceMappingURL=issue.js.map