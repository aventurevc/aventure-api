// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SentryIssueSchema } from "./issue.js";
const SentryIssuesSummarySchemaDefinition = z.object({
    /** Error message if unavailable */
    error: z.string().nullish(),
    /** List of unresolved issue */
    issue: z.array(SentryIssueSchema),
    /** Effective project slug used for query */
    project: z.string(),
    /** Originally requested project (may differ if invalid) */
    requestedProject: z.string(),
    /** Total unresolved issue matching query (Sentry X-Hits estimate, max 1000) */
    total: z.int(),
});
/**
 * Sentry issue response
 *
 * @openapiSchema SentryIssuesSummary
 * @endpoint GET /v1/sentry/issues
 * @contractShape sentry.issues-summary
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/sentry/SentryIssuesSummary.kt
 */
export const SentryIssuesSummarySchema = SentryIssuesSummarySchemaDefinition;
//# sourceMappingURL=issues-summary.js.map