import { z } from "zod/v4";
import { EntityDetailPagedTargetParamSchema } from "./detail-panel-param.js";
import { SortParamSchema } from "../pagination/page-param.js";
import { PersonBatchParamSchema } from "../../person/batch-param.js";
export const ENTITY_DETAIL_PEOPLE_ENDPOINT = "/v1/entities/detail/people";
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
export const EntityDetailPeopleParamSchema = EntityDetailPagedTargetParamSchema.extend({
    sort: SortParamSchema.optional(),
    search: z.string().trim().min(1).optional(),
    role: z.string().trim().min(1).optional(),
    isCurrent: z.boolean().optional(),
    countOnly: z.boolean().optional(),
    includeUrl: z.boolean().optional(),
    includeAddress: z.boolean().optional(),
    as: PersonBatchParamSchema.shape.projection,
    permitMonogram: z.boolean().optional(),
});
//# sourceMappingURL=detail-people-param.js.map