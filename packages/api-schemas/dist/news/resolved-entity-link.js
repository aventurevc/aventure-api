// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
const NewsResolvedEntityLinkSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    /** Canonical entity UUID */
    entityId: z.uuid(),
    href: z.string().nullish(),
    internal: z.boolean(),
    matchScore: z.number().nullish(),
    matchType: z.string().nullish(),
    mention: z.string().nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
    typeRecord: EntityTypeSchema.nullish(),
    updatedAt: z.iso.datetime({ offset: true }),
});
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
export const NewsResolvedEntityLinkSchema = NewsResolvedEntityLinkSchemaDefinition;
//# sourceMappingURL=resolved-entity-link.js.map