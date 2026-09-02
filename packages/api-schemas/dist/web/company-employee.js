// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCompanyEmployeeSchemaDefinition = z.object({
    /** Employee name */
    name: z.string().nullish(),
    /** Employee photo URL */
    photoUrl: z.string().nullish(),
    /** Employee LinkedIn profile URL */
    profileUrl: z.string().nullish(),
});
/**
 * A featured employee.
 *
 * @openapiSchema WebCompanyEmployee
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-employee
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyEmployeeSchema = WebCompanyEmployeeSchemaDefinition;
//# sourceMappingURL=company-employee.js.map