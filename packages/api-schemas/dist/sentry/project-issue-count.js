// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SentryProjectIssueCountSchemaDefinition = z.object({
    /** Error message if unavailable */
    error: z.string().nullish(),
    /** Project slug */
    project: z.string(),
    /** Total unresolved issues (Sentry X-Hits estimate, max 1000) */
    total: z.int(),
});
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
export const SentryProjectIssueCountSchema = SentryProjectIssueCountSchemaDefinition;
//# sourceMappingURL=project-issue-count.js.map