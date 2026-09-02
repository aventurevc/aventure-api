import { z } from "zod/v4";
declare const WebProfileScrapeTicketSchemaDefinition: z.ZodObject<{
    snapshotId: z.ZodString;
    sourceUrl: z.ZodString;
    statusUrl: z.ZodString;
    target: z.ZodType<{
        platform: "CRUNCHBASE" | "LINKEDIN" | "PITCHBOOK" | "X";
        profileKind: "ACCOUNT" | "COMPANY" | "PERSON";
    }, unknown, z.core.$ZodTypeInternals<{
        platform: "CRUNCHBASE" | "LINKEDIN" | "PITCHBOOK" | "X";
        profileKind: "ACCOUNT" | "COMPANY" | "PERSON";
    }, unknown>>;
}, z.core.$strip>;
type WebProfileScrapeTicketDefinition = z.infer<typeof WebProfileScrapeTicketSchemaDefinition>;
/**
 * Async submission handle for a structured profile scrape.
 *
 * @openapiSchema WebProfileScrapeTicket
 * @endpoint POST /v1/web/profile/scrape
 * @contractShape web.profile-scrape-ticket
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileScrape.kt
 */
export declare const WebProfileScrapeTicketSchema: z.ZodType<WebProfileScrapeTicketDefinition>;
export type WebProfileScrapeTicket = z.infer<typeof WebProfileScrapeTicketSchema>;
export {};
//# sourceMappingURL=profile-scrape-ticket.d.ts.map