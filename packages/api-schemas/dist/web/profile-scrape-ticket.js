// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebProfileTargetSchema } from "./profile-target.js";
const WebProfileScrapeTicketSchemaDefinition = z.object({
    /** Bright Data snapshot id — the durable poll handle */
    snapshotId: z.string(),
    /** Public URL that was submitted */
    sourceUrl: z.string(),
    /** Poll this URL for the result */
    statusUrl: z.string(),
    /** Resolved profile target */
    target: WebProfileTargetSchema,
});
/**
 * Async submission handle for a structured profile scrape.
 *
 * @openapiSchema WebProfileScrapeTicket
 * @endpoint POST /v1/web/profile/scrape
 * @contractShape web.profile-scrape-ticket
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileScrape.kt
 */
export const WebProfileScrapeTicketSchema = WebProfileScrapeTicketSchemaDefinition;
//# sourceMappingURL=profile-scrape-ticket.js.map