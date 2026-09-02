import { z } from "zod/v4";
declare const RssNewsIngestRunSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dryRun: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    feedUrl: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    skipLinker: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    skipSerp: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
type RssNewsIngestRunDefinition = z.infer<typeof RssNewsIngestRunSchemaDefinition>;
/**
 * Manual RSS news-ingest app-job payload.
 *
 * @openapiSchema RssNewsIngestRun
 * @endpoint POST /v1/jobs/rss-news-ingest/runs
 * @contractShape rss.news-ingest-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/rss/RssNewsIngestRun.kt
 */
export declare const RssNewsIngestRunSchema: z.ZodType<RssNewsIngestRunDefinition>;
export type RssNewsIngestRun = z.infer<typeof RssNewsIngestRunSchema>;
export {};
//# sourceMappingURL=news-ingest-run.d.ts.map