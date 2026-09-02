import { z } from "zod/v4";
export const PERSON_DETAIL_SIMILAR_ENDPOINT = "/v1/people/detail/similar";
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
export const PersonDetailSimilarParamSchema = z
    .object({
    id: z.uuid().optional(),
    slug: z.string().trim().min(1).optional(),
    page: z.int().nonnegative().optional(),
    size: z.int().positive().optional(),
    permitMonogram: z.boolean().optional(),
})
    .check(({ value, issues }) => {
    if (value.id === undefined && value.slug === undefined) {
        issues.push({
            code: "custom",
            origin: "custom",
            path: ["id"],
            input: value.id,
            message: "id or slug is required",
        });
    }
});
//# sourceMappingURL=detail-panel-param.js.map