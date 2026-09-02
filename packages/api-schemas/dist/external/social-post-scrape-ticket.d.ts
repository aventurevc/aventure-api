import { z } from "zod/v4";
declare const ExternalSocialPostScrapeTicketSchemaDefinition: z.ZodObject<{
    platform: z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        linkedin: "linkedin";
        other: "other";
        threads: "threads";
        tiktok: "tiktok";
        xTwitter: "xTwitter";
    }>;
    snapshotId: z.ZodString;
    sourceUrl: z.ZodString;
    statusUrl: z.ZodString;
}, z.core.$strip>;
type ExternalSocialPostScrapeTicketDefinition = z.infer<typeof ExternalSocialPostScrapeTicketSchemaDefinition>;
/**
 * Async snapshot handle for one explicit LinkedIn or X post scrape.
 *
 * @openapiSchema ExternalSocialPostScrapeTicket
 * @endpoint POST /v1/research/external-social-posts/scrape
 * @contractShape external.social-post-scrape-ticket
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export declare const ExternalSocialPostScrapeTicketSchema: z.ZodType<ExternalSocialPostScrapeTicketDefinition>;
export type ExternalSocialPostScrapeTicket = z.infer<typeof ExternalSocialPostScrapeTicketSchema>;
export {};
//# sourceMappingURL=social-post-scrape-ticket.d.ts.map