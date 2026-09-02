// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * A PitchBook monetary amount.
 *
 * @openapiSchema WebPitchbookMoney
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-money
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export const WebPitchbookMoneySchema = z.object({
    /** ISO 4217 currency code */
    currency: z.string().nullish(),
    /** Numeric amount */
    value: z.number().int().nullish(),
});
//# sourceMappingURL=pitchbook-money.js.map