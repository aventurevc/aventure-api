// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebProfileTargetSchemaDefinition = z.object({
    /** Resolved source platform */
    platform: z.enum(["LINKEDIN", "X", "CRUNCHBASE", "PITCHBOOK"]),
    /** Resolved profile kind */
    profileKind: z.enum(["PERSON", "COMPANY", "ACCOUNT"]),
});
/**
 * Resolved public-profile scrape target.
 *
 * @openapiSchema WebProfileTarget
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @endpoint POST /v1/web/profile/scrape
 * @usedBySchema WebProfileScrapeResultSchema
 * @usedBySchema WebProfileScrapeTicketSchema
 * @contractShape web.profile-target
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfilePlatform.kt
 */
export const WebProfileTargetSchema = WebProfileTargetSchemaDefinition;
//# sourceMappingURL=profile-target.js.map