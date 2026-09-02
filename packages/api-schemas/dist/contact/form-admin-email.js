// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContactFormAdminEmailSchemaDefinition = z.object({
    error: z.string().nullish(),
    messageId: z.string().nullish(),
    reason: z.string().nullish(),
    requestId: z.string().nullish(),
    status: z.string(),
    statusCode: z.int().nullish(),
});
/**
 * Contact form admin email
 *
 * @openapiSchema ContactFormAdminEmail
 * @endpoint POST /v1/contact-forms
 * @usedBySchema ContactFormCreateResultSchema
 * @contractShape contact.form-admin-email
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormAdminEmail.kt
 */
export const ContactFormAdminEmailSchema = ContactFormAdminEmailSchemaDefinition;
//# sourceMappingURL=form-admin-email.js.map