import { z } from "zod/v4";
declare const SentryIssueMetadataSchemaDefinition: z.ZodObject<{
    filename: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    function: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SentryIssueMetadataDefinition = z.infer<typeof SentryIssueMetadataSchemaDefinition>;
/**
 * Sentry issue metadata
 *
 * @openapiSchema SentryIssueMetadata
 * @endpoint GET /v1/sentry/issues
 * @usedBySchema SentryIssueSchema
 * @contractShape sentry.issue-metadata
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryIssue.kt
 */
export declare const SentryIssueMetadataSchema: z.ZodType<SentryIssueMetadataDefinition>;
export type SentryIssueMetadata = z.infer<typeof SentryIssueMetadataSchema>;
export {};
//# sourceMappingURL=issue-metadata.d.ts.map