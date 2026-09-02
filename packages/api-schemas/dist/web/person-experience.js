// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPersonExperienceSchemaDefinition = z.object({
    /** Company name */
    company: z.string().nullish(),
    /** Company LinkedIn slug */
    companyId: z.string().nullish(),
    /** Company logo URL */
    companyLogoUrl: z.string().nullish(),
    /** Company LinkedIn URL */
    companyUrl: z.string().nullish(),
    /** End date as shown on LinkedIn; 'Present' when current */
    endDate: z.string().nullish(),
    /** Start date as shown on LinkedIn */
    startDate: z.string().nullish(),
    /** Role title */
    title: z.string().nullish(),
});
/**
 * A single LinkedIn employment-history entry.
 *
 * @openapiSchema WebPersonExperience
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-experience
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebPersonExperienceSchema = WebPersonExperienceSchemaDefinition;
//# sourceMappingURL=person-experience.js.map