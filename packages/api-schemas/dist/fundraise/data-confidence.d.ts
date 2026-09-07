import { z } from "zod/v4";
/**
 * Fundraise data confidence label
 *
 * @openapiSchema FundraiseDataConfidence
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityFundraiseTransactionMutationSchema
 * @usedBySchema EntityFundraiseTransactionSchema
 * @contractShape fundraise.data-confidence
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
 */
export declare const FundraiseDataConfidenceSchema: z.ZodEnum<{
    High: "High";
    Low: "Low";
    Medium: "Medium";
    Verified: "Verified";
}>;
export type FundraiseDataConfidence = z.infer<typeof FundraiseDataConfidenceSchema>;
//# sourceMappingURL=data-confidence.d.ts.map