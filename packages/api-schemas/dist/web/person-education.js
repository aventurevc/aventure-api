// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebPersonEducationSchemaDefinition = z.object({
    /** End year */
    endYear: z.string().nullish(),
    /** School name */
    school: z.string().nullish(),
    /** School logo URL */
    schoolLogoUrl: z.string().nullish(),
    /** School LinkedIn URL */
    schoolUrl: z.string().nullish(),
    /** Start year */
    startYear: z.string().nullish(),
});
/**
 * A single LinkedIn education entry.
 *
 * @openapiSchema WebPersonEducation
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-education
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export const WebPersonEducationSchema = WebPersonEducationSchemaDefinition;
//# sourceMappingURL=person-education.js.map