import { z } from "zod/v4";
export declare const PERSON_DETAIL_SIMILAR_ENDPOINT: "/v1/people/detail/similar";
/**
 * Request-side query params for `GET /v1/people/detail/similar`.
 *
 * Owns the endpoint path plus inline operation params published by
 * `PersonSimilarRankedController.listSimilarPeople(...)`. Sorting is
 * intentionally excluded because the backend rejects custom sort on this
 * endpoint.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the GET /v1/people/detail/similar query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/people/detail/similar
 * @contractShape client.person-detail-similar-param
 * @contractRole canonical
 * @ownerModule client/person/detail-panel-param.ts
 */
export declare const PersonDetailSimilarParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PersonDetailSimilarParam = z.infer<typeof PersonDetailSimilarParamSchema>;
//# sourceMappingURL=detail-panel-param.d.ts.map