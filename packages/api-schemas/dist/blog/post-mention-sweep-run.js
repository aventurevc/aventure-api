// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const BlogPostMentionSweepRunSchemaDefinition = z.object({
    /** Caller correlation ID stored with the app-job run. */
    correlationId: z.string().max(128).nullish(),
    /** Cursor blog post id for sweep continuation. */
    cursor: z.uuid().nullish(),
    /** Optional entity owner filter for the blog-post sweep. */
    entityId: z.uuid().nullish(),
    /** When true, reprocesses blog posts whose mention arrays are present. */
    force: z.boolean().nullish(),
    /** Maximum blog posts to enqueue in this run segment. */
    limit: z.int().nullish(),
    /** Optional person owner filter for the blog-post sweep. */
    personId: z.uuid().nullish(),
    /** Blog posts already checked in chained segments. */
    processed: z.int(),
    /** Optional hard cap across chained segments. */
    targetCount: z.int().nullish(),
});
/**
 * Manual blog-post-mention-sweep app-job payload.
 *
 * @openapiSchema BlogPostMentionSweepRun
 * @endpoint POST /v1/jobs/blog-post-mention-sweep/runs
 * @contractShape blog.post-mention-sweep-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPostMentionSweepRun.kt
 */
export const BlogPostMentionSweepRunSchema = BlogPostMentionSweepRunSchemaDefinition;
//# sourceMappingURL=post-mention-sweep-run.js.map