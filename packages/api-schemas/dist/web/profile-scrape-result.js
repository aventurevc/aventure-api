// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { WebCompanyProfileSchema } from "./company-profile.js";
import { WebCrunchbaseCompanySchema } from "./crunchbase-company.js";
import { WebPersonProfileSchema } from "./person-profile.js";
import { WebPitchbookCompanySchema } from "./pitchbook-company.js";
import { WebProfileTargetSchema } from "./profile-target.js";
import { WebXProfileSchema } from "./xprofile.js";
const WebProfileScrapeResultSchemaDefinition = z.object({
    /** Upstream failure reason — populated only when status is FAILED */
    failureReason: z.string().nullish(),
    /** Server timestamp when the profile was decoded */
    fetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Structured profile — populated only when status is READY */
    profile: z
        .union([
        WebPersonProfileSchema,
        WebCompanyProfileSchema,
        WebXProfileSchema,
        WebCrunchbaseCompanySchema,
        WebPitchbookCompanySchema,
    ])
        .optional(),
    /** Bright Data snapshot id being polled */
    snapshotId: z.string(),
    /** Canonical source URL of the profile (present once decoded) */
    sourceUrl: z.string().nullish(),
    /** Lifecycle state; the discriminator for [profile] */
    status: z.enum(["RUNNING", "READY", "DEAD_PAGE", "FAILED"]),
    /** Resolved profile target */
    target: WebProfileTargetSchema,
});
/**
 * Polled state (and, once ready, the structured profile) of an async scrape.
 *
 * @openapiSchema WebProfileScrapeResult
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @contractShape web.profile-scrape-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileScrape.kt
 */
export const WebProfileScrapeResultSchema = WebProfileScrapeResultSchemaDefinition;
//# sourceMappingURL=profile-scrape-result.js.map