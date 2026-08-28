import { z } from "zod/v4";
declare const EntityValuationMutationSchemaDefinition: z.ZodObject<{
    asOfDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    confidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        high: "high";
        low: "low";
        medium: "medium";
    }>>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        postMoney: "postMoney";
        preMoney: "preMoney";
        reported: "reported";
    }>>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    valuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type EntityValuationMutationDefinition = z.infer<typeof EntityValuationMutationSchemaDefinition>;
/**
 * Create/update payload for stated entity valuation datapoints. Writes persist `latestValuation` research-detail rows only; fundraise-derived points are read-only on this surface.
 *
 * @openapiSchema EntityValuationMutation
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @contractShape entity.valuation-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationMutation.kt
 */
export declare const EntityValuationMutationSchema: z.ZodType<EntityValuationMutationDefinition>;
export type EntityValuationMutation = z.infer<typeof EntityValuationMutationSchema>;
export {};
//# sourceMappingURL=valuation-mutation.d.ts.map