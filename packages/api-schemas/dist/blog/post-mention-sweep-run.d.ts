import { z } from "zod/v4";
declare const BlogPostMentionSweepRunSchemaDefinition: z.ZodObject<{
    correlationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cursor: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    force: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    limit: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    processed: z.ZodInt;
    targetCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type BlogPostMentionSweepRunDefinition = z.infer<typeof BlogPostMentionSweepRunSchemaDefinition>;
/**
 * Manual blog-post-mention-sweep app-job payload.
 *
 * @openapiSchema BlogPostMentionSweepRun
 * @endpoint POST /v1/jobs/blog-post-mention-sweep/runs
 * @contractShape blog.post-mention-sweep-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/blogpost/BlogPostMentionSweepRun.kt
 */
export declare const BlogPostMentionSweepRunSchema: z.ZodType<BlogPostMentionSweepRunDefinition>;
export type BlogPostMentionSweepRun = z.infer<typeof BlogPostMentionSweepRunSchema>;
export {};
//# sourceMappingURL=post-mention-sweep-run.d.ts.map