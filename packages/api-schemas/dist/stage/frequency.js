// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const StageFrequencySchemaDefinition = z.object({
    count: z.int(),
    stage: z.string(),
});
/**
 * Canonical equity stage derived from a transaction calculatedRoundLabel, with deal frequency ranked by count descending.
 *
 * @openapiSchema StageFrequency
 * @endpoint GET /v1/entities/detail/investor-activity
 * @usedBySchema EntityFundraiseInvestorActivitySchema
 * @contractShape stage.frequency
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/EntityFundingDetail.kt
 */
export const StageFrequencySchema = StageFrequencySchemaDefinition;
//# sourceMappingURL=frequency.js.map