import { z } from "zod/v4";
declare const WebProfileTargetSchemaDefinition: z.ZodObject<{
    platform: z.ZodEnum<{
        CRUNCHBASE: "CRUNCHBASE";
        LINKEDIN: "LINKEDIN";
        PITCHBOOK: "PITCHBOOK";
        X: "X";
    }>;
    profileKind: z.ZodEnum<{
        ACCOUNT: "ACCOUNT";
        COMPANY: "COMPANY";
        PERSON: "PERSON";
    }>;
}, z.core.$strip>;
type WebProfileTargetDefinition = z.infer<typeof WebProfileTargetSchemaDefinition>;
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
export declare const WebProfileTargetSchema: z.ZodType<WebProfileTargetDefinition>;
export type WebProfileTarget = z.infer<typeof WebProfileTargetSchema>;
export {};
//# sourceMappingURL=profile-target.d.ts.map