import { z } from "zod/v4";
declare const BlogPostIngestRunSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cursor: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    dryRun: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    feedUrl: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    processed: z.ZodInt;
    targetCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type BlogPostIngestRunDefinition = z.infer<typeof BlogPostIngestRunSchemaDefinition>;
/**
 * Manual blog-post-ingest app-job payload.
 *
 * @openapiSchema BlogPostIngestRun
 * @endpoint POST /v1/jobs/blog-post-ingest/runs
 * @contractShape blog.post-ingest-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPostIngestRun.kt
 */
export declare const BlogPostIngestRunSchema: z.ZodType<BlogPostIngestRunDefinition>;
export type BlogPostIngestRun = z.infer<typeof BlogPostIngestRunSchema>;
export {};
//# sourceMappingURL=post-ingest-run.d.ts.map