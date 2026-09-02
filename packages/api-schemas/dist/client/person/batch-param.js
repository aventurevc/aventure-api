import { z } from "zod/v4";
import { PersonBatchParamSchema } from "../../person/batch-param.js";
export const PERSON_BATCH_ASSOCIATION_PROJECTION = PersonBatchParamSchema.shape.projection.unwrap().enum.association;
/**
 * Request-side query params for the association projection of `POST /v1/people/batch`.
 *
 * Composes the canonical batch query params with the stricter association-only
 * requirements. The parent's `cursor`/`sort` mutual-exclusion `.check()` is
 * preserved by Zod 4 `safeExtend` (verified in zod/v4/core/util.js#mergeDefs);
 * re-declaring it here would emit duplicate issues for the same `sort` path.
 *
 * @shared composition:used as request-side params contract; not direct because downstream callers build the POST /v1/people/batch association query object outside generated OpenAPI components
 * @usedByEndpoint POST /v1/people/batch
 * @contractShape client.person-batch-association-param
 * @contractRole canonical
 * @ownerModule client/person/batch-param.ts
 */
export const PersonBatchAssociationParamSchema = PersonBatchParamSchema.safeExtend({
    projection: z.literal(PERSON_BATCH_ASSOCIATION_PROJECTION),
    maxAssociations: z.int().positive(),
});
//# sourceMappingURL=batch-param.js.map