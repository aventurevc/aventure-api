// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SentryIssueMetadataSchemaDefinition = z.object({
    /** Source file */
    filename: z.string().nullish(),
    /** Function name */
    function: z.string().nullish(),
    /** Exception type */
    type: z.string().nullish(),
    /** Exception message */
    value: z.string().nullish(),
});
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
export const SentryIssueMetadataSchema = SentryIssueMetadataSchemaDefinition;
//# sourceMappingURL=issue-metadata.js.map