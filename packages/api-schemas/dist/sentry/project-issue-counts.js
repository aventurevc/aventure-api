// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SentryProjectIssueCountSchema } from "./project-issue-count.js";
const SentryProjectIssueCountsSchemaDefinition = z.object({
    /** Per-project issue count */
    count: z.array(SentryProjectIssueCountSchema),
    /** Error message if unavailable */
    error: z.string().nullish(),
});
/**
 * Sentry issue count response
 *
 * @openapiSchema SentryProjectIssueCounts
 * @endpoint GET /v1/sentry/issues/counts
 * @contractShape sentry.project-issue-counts
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryProjectIssueCounts.kt
 */
export const SentryProjectIssueCountsSchema = SentryProjectIssueCountsSchemaDefinition;
//# sourceMappingURL=project-issue-counts.js.map