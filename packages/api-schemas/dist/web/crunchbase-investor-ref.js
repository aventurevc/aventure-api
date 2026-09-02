// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCrunchbaseInvestorRefSchemaDefinition = z.object({
    /** Investor logo image URL */
    imageUrl: z.string().nullish(),
    /** Investor name */
    name: z.string().nullish(),
    /** Crunchbase permalink */
    permalink: z.string().nullish(),
});
/**
 * A Crunchbase investor reference.
 *
 * @openapiSchema WebCrunchbaseInvestorRef
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseFundingRoundSchema
 * @contractShape web.crunchbase-investor-ref
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export const WebCrunchbaseInvestorRefSchema = WebCrunchbaseInvestorRefSchemaDefinition;
//# sourceMappingURL=crunchbase-investor-ref.js.map