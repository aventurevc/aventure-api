// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BlogPostIngestRunSchemaDefinition = z.object({
    /** Caller correlation ID stored with the app-job run. */
    correlationId: z.string().max(128).nullish(),
    /** Cursor URL-link id for sweep continuation. */
    cursor: z.int().nullish(),
    /** When true, discovers feeds and fetches blog posts but skips blog-post and embedding writes. */
    dryRun: z.boolean().nullish(),
    /** Optional entity owner filter for the owner sweep. */
    entityId: z.uuid().nullish(),
    /** Optional feed URLs to ingest directly instead of autodiscovering from owner website URLs. */
    feedUrl: z.array(z.string()).min(1).max(2147483647).nullish(),
    /** Maximum blog posts to ingest in this run segment. */
    limit: z.int().nullish(),
    /** Optional person owner filter for the owner sweep. */
    personId: z.uuid().nullish(),
    /** Owners already processed in chained segments. */
    processed: z.int(),
    /** Optional hard cap across chained segments. */
    targetCount: z.int().nullish(),
});
/**
 * Manual blog-post-ingest app-job payload.
 *
 * @openapiSchema BlogPostIngestRun
 * @endpoint POST /v1/jobs/blog-post-ingest/runs
 * @contractShape blog.post-ingest-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPostIngestRun.kt
 */
export const BlogPostIngestRunSchema = BlogPostIngestRunSchemaDefinition;
//# sourceMappingURL=post-ingest-run.js.map