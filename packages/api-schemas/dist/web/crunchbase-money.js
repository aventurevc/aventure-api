// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * A Crunchbase monetary amount.
 *
 * @openapiSchema WebCrunchbaseMoney
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseAcquisitionSchema
 * @usedBySchema WebCrunchbaseFundingRoundSchema
 * @usedBySchema WebCrunchbaseFundingSchema
 * @usedBySchema WebCrunchbaseIpoSchema
 * @contractShape web.crunchbase-money
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseMoneySchema = z.object({
    /** ISO 4217 currency code */
    currency: z.string().nullish(),
    /** Amount in the native currency */
    value: z.number().int().nullish(),
    /** Amount normalized to USD */
    valueUsd: z.number().int().nullish(),
});
//# sourceMappingURL=crunchbase-money.js.map