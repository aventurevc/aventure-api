import { z } from "zod/v4";
declare const NewsResolvedEntityLinkSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    entityId: z.ZodUUID;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    internal: z.ZodBoolean;
    matchScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    matchType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mention: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type NewsResolvedEntityLinkDefinition = z.infer<typeof NewsResolvedEntityLinkSchemaDefinition>;
/**
 * Resolved entity mention in news content - hyperlink to an entity detected in article text - matchType: composite format "status:score|quote=evidence|user=email|at=timestamp" - m...
 *
 * @openapiSchema NewsResolvedEntityLink
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
 * @contractShape news.resolved-entity-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsLinkModels.kt
 */
export declare const NewsResolvedEntityLinkSchema: z.ZodType<NewsResolvedEntityLinkDefinition>;
export type NewsResolvedEntityLink = z.infer<typeof NewsResolvedEntityLinkSchema>;
export {};
//# sourceMappingURL=resolved-entity-link.d.ts.map