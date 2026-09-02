import { z } from "zod/v4";
import { EntityTypeSchema } from "../../entity/type.js";
import { SortParamSchema } from "../pagination/page-param.js";
/**
 * Private id|slug target selector. Composed into the exported
 * `EntityDetailPagedTargetParamSchema`; not itself exported because the
 * api-schemas duplicate-shape contract treats two same-shape exports as a
 * SSOT defect, and `EntityDetailInvestorActivityParamSchema` already publishes
 * the same `{id, slug}` pair as a distinct endpoint contract.
 */
const EntityDetailTargetParamSchema = z.object({
    id: z.uuid().optional(),
    slug: z.string().trim().min(1).optional(),
});
/**
 * Paged target selector: `EntityDetailTargetParamSchema` plus required page+size,
 * the common base for `/v1/entities/detail/*` endpoints that paginate.
 *
 * @shared composition:used as building block for paged entity-detail params; not direct because the page+size+id+slug shape repeats across detail panel + people endpoints
 * @usedByEndpoint none:external-root contract consumed by downstream repos
 * @contractShape client.entity-detail-paged-target-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailPagedTargetParamSchema = EntityDetailTargetParamSchema.extend({
    page: z.int().nonnegative(),
    size: z.int().positive(),
});
export const ENTITY_DETAIL_SIMILAR_ENDPOINT = "/v1/entities/detail/similar";
export const ENTITY_DETAIL_NEWS_ENDPOINT = "/v1/entities/detail/news";
export const ENTITY_DETAIL_INVESTMENTS_ENDPOINT = "/v1/entities/detail/investments";
export const ENTITY_DETAIL_FUNDRAISE_ROUNDS_ENDPOINT = "/v1/entities/detail/fundraise-rounds";
export const ENTITY_DETAIL_INVESTORS_ENDPOINT = "/v1/entities/detail/investors";
export const ENTITY_DETAIL_INVESTOR_ACTIVITY_ENDPOINT = "/v1/entities/detail/investor-activity";
/**
 * Request-side query params for `GET /v1/entities/detail/similar`.
 *
 * Owns the inline operation params published by `EntitySimilarityController`.
 * Sorting is intentionally excluded because the backend rejects custom sort on
 * this endpoint.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/similar query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/similar
 * @contractShape client.entity-detail-similar-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailSimilarParamSchema = EntityDetailPagedTargetParamSchema.extend({
    relationshipType: z.string().trim().min(1).optional(),
    typeRecord: z.array(EntityTypeSchema).optional(),
    permitMonogram: z.boolean().optional(),
});
/**
 * Request-side query params for `GET /v1/entities/detail/news`.
 *
 * Owns the entity target plus inline scoped-news filter params published by
 * `EntityNewsController.listEntityNews(...)`. Sorting is intentionally
 * excluded because the backend rejects custom sort on this endpoint.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/news query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/news
 * @contractShape client.entity-detail-news-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailNewsParamSchema = EntityDetailPagedTargetParamSchema.extend({
    search: z.string().trim().min(1).optional(),
    category: z.string().trim().min(1).optional(),
    cursor: z.string().trim().min(1).optional(),
});
/**
 * Request-side query params shared by `GET /v1/entities/detail/investments`
 * and `GET /v1/entities/detail/fundraise-rounds`.
 *
 * Both endpoints are owned by `EntityFundraiseController` and publish the same
 * inline transaction list filter surface plus pageable params.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build these GET detail-fundraise query objects outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investments
 * @usedByEndpoint GET /v1/entities/detail/fundraise-rounds
 * @contractShape client.entity-detail-fundraise-transaction-list-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailFundraiseTransactionListParamSchema = EntityDetailPagedTargetParamSchema.extend({
    round: z.string().trim().min(1).optional(),
    dateFrom: z.iso.date().optional(),
    dateTo: z.iso.date().optional(),
    minAmount: z.number().int().optional(),
    maxAmount: z.number().int().optional(),
    permitMonogram: z.boolean().optional(),
    sort: SortParamSchema.optional(),
});
/**
 * Request-side query params for `GET /v1/entities/detail/investments`.
 *
 * Extends the shared transaction-list filter surface with `latestPerEntity`,
 * a deduplication flag that returns only the single most-recent investment
 * transaction per portfolio company. Use `latestPerEntity: true` for UI
 * surfaces that render unique company cards (e.g. "Recent Investments" on an
 * investor overview page). Omit or set to `false` to get every investment row,
 * including multiple rounds in the same company — the mode needed by full
 * transaction-list views.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/investments query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investments
 * @contractShape client.entity-detail-investments-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailInvestmentsParamSchema = EntityDetailFundraiseTransactionListParamSchema.extend({
    /** deduplicate to one row per portfolio company (most-recent round) */
    latestPerEntity: z.boolean().optional(),
});
/**
 * Request-side query params for `GET /v1/entities/detail/investors`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/investors query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investors
 * @contractShape client.entity-detail-investors-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailInvestorsParamSchema = EntityDetailPagedTargetParamSchema.extend({
    permitMonogram: z.boolean().optional(),
    sort: SortParamSchema.optional(),
});
/**
 * Request-side query params for `GET /v1/entities/detail/investor-activity`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/investor-activity query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investor-activity
 * @contractShape client.entity-detail-investor-activity-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export const EntityDetailInvestorActivityParamSchema = z.object({
    id: z.uuid().optional(),
    slug: z.string().trim().min(1).optional(),
});
//# sourceMappingURL=detail-panel-param.js.map