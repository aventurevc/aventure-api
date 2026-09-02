import { z } from "zod/v4";
declare const SentryProjectIssueCountSchemaDefinition: z.ZodObject<{
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    project: z.ZodString;
    total: z.ZodInt;
}, z.core.$strip>;
type SentryProjectIssueCountDefinition = z.infer<typeof SentryProjectIssueCountSchemaDefinition>;
/**
 * Sentry unresolved issue count for a single project
 *
 * @openapiSchema SentryProjectIssueCount
 * @endpoint GET /v1/sentry/issues/counts
 * @usedBySchema SentryProjectIssueCountsSchema
 * @contractShape sentry.project-issue-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryProjectIssueCount.kt
 */
export declare const SentryProjectIssueCountSchema: z.ZodType<SentryProjectIssueCountDefinition>;
export type SentryProjectIssueCount = z.infer<typeof SentryProjectIssueCountSchema>;
export {};
//# sourceMappingURL=project-issue-count.d.ts.map