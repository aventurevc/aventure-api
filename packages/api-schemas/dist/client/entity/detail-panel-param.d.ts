import { z } from "zod/v4";
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
export declare const EntityDetailPagedTargetParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
}, z.core.$strip>;
export declare const ENTITY_DETAIL_SIMILAR_ENDPOINT: "/v1/entities/detail/similar";
export declare const ENTITY_DETAIL_NEWS_ENDPOINT: "/v1/entities/detail/news";
export declare const ENTITY_DETAIL_INVESTMENTS_ENDPOINT: "/v1/entities/detail/investments";
export declare const ENTITY_DETAIL_FUNDRAISE_ROUNDS_ENDPOINT: "/v1/entities/detail/fundraise-rounds";
export declare const ENTITY_DETAIL_INVESTORS_ENDPOINT: "/v1/entities/detail/investors";
export declare const ENTITY_DETAIL_INVESTOR_ACTIVITY_ENDPOINT: "/v1/entities/detail/investor-activity";
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
export declare const EntityDetailSimilarParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    relationshipType: z.ZodOptional<z.ZodString>;
    typeRecord: z.ZodOptional<z.ZodArray<z.ZodEnum<{
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
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityDetailSimilarParam = z.infer<typeof EntityDetailSimilarParamSchema>;
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
export declare const EntityDetailNewsParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    search: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodString>;
    cursor: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityDetailNewsParam = z.infer<typeof EntityDetailNewsParamSchema>;
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
export declare const EntityDetailFundraiseTransactionListParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    round: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodISODate>;
    dateTo: z.ZodOptional<z.ZodISODate>;
    minAmount: z.ZodOptional<z.ZodNumber>;
    maxAmount: z.ZodOptional<z.ZodNumber>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type EntityDetailFundraiseTransactionListParam = z.infer<typeof EntityDetailFundraiseTransactionListParamSchema>;
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
export declare const EntityDetailInvestmentsParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    round: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodISODate>;
    dateTo: z.ZodOptional<z.ZodISODate>;
    minAmount: z.ZodOptional<z.ZodNumber>;
    maxAmount: z.ZodOptional<z.ZodNumber>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    latestPerEntity: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityDetailInvestmentsParam = z.infer<typeof EntityDetailInvestmentsParamSchema>;
/**
 * Request-side query params for `GET /v1/entities/detail/investors`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/investors query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investors
 * @contractShape client.entity-detail-investors-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export declare const EntityDetailInvestorsParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type EntityDetailInvestorsParam = z.infer<typeof EntityDetailInvestorsParamSchema>;
/**
 * Request-side query params for `GET /v1/entities/detail/investor-activity`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/entities/detail/investor-activity query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/investor-activity
 * @contractShape client.entity-detail-investor-activity-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-panel-param.ts
 */
export declare const EntityDetailInvestorActivityParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EntityDetailInvestorActivityParam = z.infer<typeof EntityDetailInvestorActivityParamSchema>;
//# sourceMappingURL=detail-panel-param.d.ts.map