import { z } from "zod/v4";
import { type PersonBatchParam } from "../../person/batch-param.ts";
export type PersonBatchProjection = NonNullable<PersonBatchParam["projection"]>;
export declare const PERSON_BATCH_ASSOCIATION_PROJECTION: "association";
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
export declare const PersonBatchAssociationParamSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodInt>;
    size: z.ZodOptional<z.ZodInt>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    cursor: z.ZodOptional<z.ZodString>;
    hasImageFirst: z.ZodOptional<z.ZodBoolean>;
    includePrivate: z.ZodOptional<z.ZodBoolean>;
    permitMonogram: z.ZodOptional<z.ZodBoolean>;
    projection: z.ZodLiteral<"association">;
    maxAssociations: z.ZodInt;
}, z.core.$strip>;
export type PersonBatchAssociationParam = z.infer<typeof PersonBatchAssociationParamSchema>;
//# sourceMappingURL=batch-param.d.ts.map