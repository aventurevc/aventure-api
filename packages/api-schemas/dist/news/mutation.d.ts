import { z } from "zod/v4";
declare const NewsMutationSchemaDefinition: z.ZodObject<{
    allowSuspectedShellStrip: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    author: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    detachEntity: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    detachPerson: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    entityJoinId: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    entityMatchEvidence: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityMatchScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    entityMatchStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    externalNewsArticle: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    newsImageThumbnail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsUrlOriginal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    personMatchEvidence: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personMatchScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    personMatchStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publication: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    qwen4bFp16Embedding: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodNumber>>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type NewsMutationDefinition = z.infer<typeof NewsMutationSchemaDefinition>;
/**
 * Create/update payload for news article fields and joins.
 *
 * @openapiSchema NewsMutation
 * @endpoint POST /v1/entities/detail/news
 * @endpoint POST /v1/news/detail
 * @endpoint POST /v1/people/detail/news
 * @endpoint PATCH /v1/entities/detail/news/{newsId}
 * @endpoint PATCH /v1/news/detail
 * @endpoint PATCH /v1/people/detail/news/{newsId}
 * @endpoint PUT /v1/entities/detail/news/{newsId}
 * @endpoint PUT /v1/news/detail
 * @endpoint PUT /v1/people/detail/news/{newsId}
 * @contractShape news.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsMutation.kt
 */
export declare const NewsMutationSchema: z.ZodType<NewsMutationDefinition>;
export type NewsMutation = z.infer<typeof NewsMutationSchema>;
export {};
//# sourceMappingURL=mutation.d.ts.map