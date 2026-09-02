import { z } from "zod/v4";
export declare const ENTITY_DETAIL_PEOPLE_ENDPOINT: "/v1/entities/detail/people";
/**
 * Request-side query params for `GET /v1/entities/detail/people`.
 *
 * This is the shared client owner for the endpoint path plus the inline
 * operation params published by `EntityPeopleController.listEntityPeople(...)`.
 * Composes `EntityDetailPagedTargetParamSchema` (id|slug + required page+size)
 * to keep the target-selector shape SSOT across `/v1/entities/detail/*`.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the same GET /v1/entities/detail/people query object outside generated OpenAPI components
 * @usedByEndpoint GET /v1/entities/detail/people
 * @contractShape client.entity-detail-people-param
 * @contractRole canonical
 * @ownerModule client/entity/detail-people-param.ts
 */
export declare const EntityDetailPeopleParamSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodUUID>;
    slug: z.ZodOptional<z.ZodString>;
    page: z.ZodInt;
    size: z.ZodInt;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    search: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    isCurrent: z.ZodOptional<z.ZodBoolean>;
    countOnly: z.ZodOptional<z.ZodBoolean>;
    includeUrl: z.ZodOptional<z.ZodBoolean>;
    includeAddress: z.ZodOptional<z.ZodBoolean>;
    as: z.ZodOptional<z.ZodEnum<{
        association: "association";
        core: "core";
    }>>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityDetailPeopleParam = z.infer<typeof EntityDetailPeopleParamSchema>;
//# sourceMappingURL=detail-people-param.d.ts.map