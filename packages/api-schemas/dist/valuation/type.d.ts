import { z } from "zod/v4";
/**
 * Which side of the pre/post relationship the source declared.
 *
 * @openapiSchema ValuationType
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
 * @usedBySchema EntityValuationMutationSchema
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape valuation.type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationTimeSeriesPoint.kt
 */
export declare const ValuationTypeSchema: z.ZodEnum<{
    postMoney: "postMoney";
    preMoney: "preMoney";
    reported: "reported";
}>;
export type ValuationType = z.infer<typeof ValuationTypeSchema>;
//# sourceMappingURL=type.d.ts.map