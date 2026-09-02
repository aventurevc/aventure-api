// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPitchbookCompetitorSchemaDefinition = z.object({
    /** Financing status */
    financingStatus: z.string().nullish(),
    /** Location text */
    location: z.string().nullish(),
    /** Competitor name */
    name: z.string().nullish(),
    /** PitchBook profile URL */
    profileUrl: z.string().nullish(),
});
/**
 * A PitchBook-listed competitor.
 *
 * @openapiSchema WebPitchbookCompetitor
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-competitor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export const WebPitchbookCompetitorSchema = WebPitchbookCompetitorSchemaDefinition;
//# sourceMappingURL=pitchbook-competitor.js.map