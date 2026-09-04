import { z } from "zod/v4";
/**
 * Round participation label - shared by entity and person investor participation
 *
 * @openapiSchema RoundLabel
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
 * @usedBySchema EntityInvestorParticipationSchema
 * @usedBySchema FundraiseInvestmentAttributionSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape round.label
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
 */
export declare const RoundLabelSchema: z.ZodObject<{
    round: z.ZodString;
}, z.core.$strip>;
export type RoundLabel = z.infer<typeof RoundLabelSchema>;
//# sourceMappingURL=label.d.ts.map