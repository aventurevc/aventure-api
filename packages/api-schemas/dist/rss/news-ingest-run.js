// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const RssNewsIngestRunSchemaDefinition = z.object({
    /** Caller correlation ID stored with the app-job run. */
    correlationId: z.string().max(128).nullish(),
    /** When true, reads feeds and fetches articles but skips article, provenance, linker, and join writes. */
    dryRun: z.boolean().nullish(),
    /** Optional subset of configured RSS feed URLs to run. Omit to use every configured feed. */
    feedUrl: z.array(z.string()).min(1).max(2147483647).nullish(),
    /** Maximum articles to read across selected feeds. */
    limit: z.int().nullish(),
    /** When true, skips entity/person linker processing. */
    skipLinker: z.boolean().nullish(),
    /** When true, skips SERP-backed linker evidence collection. */
    skipSerp: z.boolean().nullish(),
});
/**
 * Manual RSS news-ingest app-job payload.
 *
 * @openapiSchema RssNewsIngestRun
 * @endpoint POST /v1/jobs/rss-news-ingest/runs
 * @contractShape rss.news-ingest-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/rss/RssNewsIngestRun.kt
 */
export const RssNewsIngestRunSchema = RssNewsIngestRunSchemaDefinition;
//# sourceMappingURL=news-ingest-run.js.map