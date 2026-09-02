// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebCompanyOfficeSchemaDefinition = z.object({
    /** Formatted address */
    address: z.string().nullish(),
    /** Maps directions URL */
    directionsUrl: z.string().nullish(),
});
/**
 * A company office location.
 *
 * @openapiSchema WebCompanyOffice
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-office
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export const WebCompanyOfficeSchema = WebCompanyOfficeSchemaDefinition;
//# sourceMappingURL=company-office.js.map