// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ExternalSocialPostPlatformSchema } from "./social-post-platform.js";
const ExternalSocialPostScrapeTicketSchemaDefinition = z.object({
    /** Social platform selected from the explicit permalink */
    platform: ExternalSocialPostPlatformSchema,
    /** Bright Data snapshot id */
    snapshotId: z.string(),
    /** Canonical submitted social-post permalink */
    sourceUrl: z.string(),
    /** POST this URL to poll and ingest the canonical result */
    statusUrl: z.string(),
});
/**
 * Async snapshot handle for one explicit LinkedIn or X post scrape.
 *
 * @openapiSchema ExternalSocialPostScrapeTicket
 * @endpoint POST /v1/research/external-social-posts/scrape
 * @contractShape external.social-post-scrape-ticket
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export const ExternalSocialPostScrapeTicketSchema = ExternalSocialPostScrapeTicketSchemaDefinition;
//# sourceMappingURL=social-post-scrape-ticket.js.map