// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityImageSchema } from "./image.js";
/**
 * Fundraise transaction metadata linked to a person investment
 *
 * @openapiSchema EntityFundraise
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonInvestmentSchema
 * @contractShape entity.fundraise
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonInvestment.kt
 */
export const EntityFundraiseSchema = z.object({
    amountRaised: z.number().nullish(),
    dateAnnounced: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical fundraise transaction UUID */
    id: z.uuid(),
    image: EntityImageSchema,
    investorCount: z.int().nullish(),
    nameBrand: z.string(),
    round: z.string().nullish(),
    status: z.string().nullish(),
    valuationPostMoney: z.number().nullish(),
});
//# sourceMappingURL=fundraise.js.map