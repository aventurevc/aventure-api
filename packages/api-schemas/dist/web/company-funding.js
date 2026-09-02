// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * LinkedIn funding summary signal.
 *
 * @openapiSchema WebCompanyFunding
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-funding
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyFundingSchema = z.object({
    /** Last round date (raw ISO-8601 from source) */
    lastRoundDate: z.string().nullish(),
    /** Last round type */
    lastRoundType: z.string().nullish(),
    /** Number of rounds LinkedIn lists */
    roundCount: z.int().nullish(),
});
//# sourceMappingURL=company-funding.js.map