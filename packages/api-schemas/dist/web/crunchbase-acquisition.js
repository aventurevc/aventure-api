// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCrunchbaseMoneySchema } from "./crunchbase-money.js";
/**
 * Crunchbase acquisition details.
 *
 * @openapiSchema WebCrunchbaseAcquisition
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-acquisition
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseAcquisitionSchema = z.object({
    /** Acquirer name */
    acquirer: z.string().nullish(),
    /** Acquirer Crunchbase permalink */
    acquirerPermalink: z.string().nullish(),
    /** Acquisition price */
    acquisitionPrice: WebCrunchbaseMoneySchema.nullish(),
    /** Acquisition date (raw source text) */
    date: z.string().nullish(),
    /** Transaction name */
    transactionName: z.string().nullish(),
});
//# sourceMappingURL=crunchbase-acquisition.js.map