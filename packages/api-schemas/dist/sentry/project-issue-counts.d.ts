import { z } from "zod/v4";
declare const SentryProjectIssueCountsSchemaDefinition: z.ZodObject<{
    count: z.ZodArray<z.ZodType<{
        error?: string | null | undefined;
        project: string;
        total: number;
    }, unknown, z.core.$ZodTypeInternals<{
        error?: string | null | undefined;
        project: string;
        total: number;
    }, unknown>>>;
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SentryProjectIssueCountsDefinition = z.infer<typeof SentryProjectIssueCountsSchemaDefinition>;
/**
 * Sentry issue count response
 *
 * @openapiSchema SentryProjectIssueCounts
 * @endpoint GET /v1/sentry/issues/counts
 * @contractShape sentry.project-issue-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryProjectIssueCounts.kt
 */
export declare const SentryProjectIssueCountsSchema: z.ZodType<SentryProjectIssueCountsDefinition>;
export type SentryProjectIssueCounts = z.infer<typeof SentryProjectIssueCountsSchema>;
export {};
//# sourceMappingURL=project-issue-counts.d.ts.map