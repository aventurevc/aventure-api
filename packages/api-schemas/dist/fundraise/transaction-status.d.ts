import { z } from "zod/v4";
/**
 * Fundraise transaction status label
 *
 * @openapiSchema FundraiseTransactionStatus
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @usedBySchema EntityFundraiseTransactionMutationSchema
 * @contractShape fundraise.transaction-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
 */
export declare const FundraiseTransactionStatusSchema: z.ZodEnum<{
    Active: "Active";
    Announced: "Announced";
    "Announced; subject to approvals and closing conditions": "Announced; subject to approvals and closing conditions";
    Closed: "Closed";
    Completed: "Completed";
    "In Progress": "In Progress";
    Open: "Open";
}>;
export type FundraiseTransactionStatus = z.infer<typeof FundraiseTransactionStatusSchema>;
//# sourceMappingURL=transaction-status.d.ts.map