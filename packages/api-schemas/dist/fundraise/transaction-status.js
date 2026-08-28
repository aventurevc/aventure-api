// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const FundraiseTransactionStatusSchema = z.enum([
    "Announced",
    "Announced; subject to approvals and closing conditions",
    "Active",
    "Closed",
    "Completed",
    "In Progress",
    "Open",
]);
//# sourceMappingURL=transaction-status.js.map