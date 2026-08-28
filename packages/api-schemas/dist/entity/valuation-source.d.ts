import { z } from "zod/v4";
/**
 * Which canonical store the point came from.
 *
 * @openapiSchema EntityValuationSource
 * @endpoint GET /v1/entities/detail/financial/valuation
 * @endpoint POST /v1/entities/detail/financial/valuation
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
 * @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
 * @usedBySchema EntityValuationTimeSeriesPointSchema
 * @contractShape entity.valuation-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationTimeSeriesPoint.kt
 */
export declare const EntityValuationSourceSchema: z.ZodEnum<{
    fundraiseRound: "fundraiseRound";
    researchDetail: "researchDetail";
}>;
export type EntityValuationSource = z.infer<typeof EntityValuationSourceSchema>;
//# sourceMappingURL=valuation-source.d.ts.map