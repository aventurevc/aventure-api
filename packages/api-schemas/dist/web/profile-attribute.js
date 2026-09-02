// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const WebProfileAttributeSchemaDefinition = z.object({
    /** Source grouping, e.g. contact, faq, patent, raw */
    group: z.string().nullish(),
    /** Human label, e.g. Acquirer, HQ, Primary Industry */
    label: z.string(),
    /** Source link associated with the fact */
    link: z.string().nullish(),
    /** Value for the label */
    value: z.string(),
});
/**
 * A label/value profile fact not mapped to a typed field
 *
 * @openapiSchema WebProfileAttribute
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @usedBySchema WebCrunchbaseCompanySchema
 * @usedBySchema WebPersonProfileSchema
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.profile-attribute
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebProfileAttribute.kt
 */
export const WebProfileAttributeSchema = WebProfileAttributeSchemaDefinition;
//# sourceMappingURL=profile-attribute.js.map