// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { NewsSchema } from "./news.js";
import { NewsResolvedEntityLinkSchema } from "./resolved-entity-link.js";
import { NewsResolvedPersonLinkSchema } from "./resolved-person-link.js";
const NewsDetailSchemaDefinition = z.object({
    content: z.string().nullish(),
    core: NewsSchema,
    /** Resolved entity mentions — read-only display projections. News mutations attach entities only via flat entityJoinId values, never these nested objects. */
    entityMentionResolved: z.array(NewsResolvedEntityLinkSchema),
    externalId: z.string().nullish(),
    linkedContent: z.string().nullish(),
    /** Resolved person mentions — read-only display projections. News mutations attach people only via flat personId/personSlug values, never these nested objects. */
    personMentionResolved: z.array(NewsResolvedPersonLinkSchema),
});
/**
 * Canonical news detail owner
 *
 * @openapiSchema NewsDetail
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
 * @usedBySchema PageNewsDetailSchema
 * @contractShape news.detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/NewsDetail.kt
 */
export const NewsDetailSchema = NewsDetailSchemaDefinition;
//# sourceMappingURL=detail.js.map