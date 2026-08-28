import { z } from "zod/v4";
declare const NewsResolvedPersonLinkSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    matchScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    matchType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mention: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodUUID;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type NewsResolvedPersonLinkDefinition = z.infer<typeof NewsResolvedPersonLinkSchemaDefinition>;
/**
 * Resolved person mention in news content - hyperlink to a person detected in article text
 *
 * @openapiSchema NewsResolvedPersonLink
 * @endpoint GET /v1/news/detail
 * @endpoint GET /v1/news/duplicate-check
 * @endpoint POST /v1/entities/detail/news
 * @endpoint POST /v1/news/detail
 * @endpoint POST /v1/news/duplicate-check
 * @endpoint POST /v1/people/detail/news
 * @endpoint PATCH /v1/entities/detail/news/{newsId}
 * @endpoint PATCH /v1/news/detail
 * @endpoint PATCH /v1/people/detail/news/{newsId}
 * @endpoint PUT /v1/entities/detail/news/{newsId}
 * @endpoint PUT /v1/news/detail
 * @endpoint PUT /v1/people/detail/news/{newsId}
 * @usedBySchema NewsDetailSchema
 * @contractShape news.resolved-person-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsLinkModels.kt
 */
export declare const NewsResolvedPersonLinkSchema: z.ZodType<NewsResolvedPersonLinkDefinition>;
export type NewsResolvedPersonLink = z.infer<typeof NewsResolvedPersonLinkSchema>;
export {};
//# sourceMappingURL=resolved-person-link.d.ts.map