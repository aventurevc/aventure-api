// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContactFormAdminEmailSchema } from "./form-admin-email.js";
import { ContactFormSchema } from "./form.js";
const ContactFormCreateResultSchemaDefinition = z.object({
    adminEmail: ContactFormAdminEmailSchema,
    contactForm: ContactFormSchema,
});
/**
 * Contact form create result
 *
 * @openapiSchema ContactFormCreateResult
 * @endpoint POST /v1/contact-forms
 * @contractShape contact.form-create-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormCreateResult.kt
 */
export const ContactFormCreateResultSchema = ContactFormCreateResultSchemaDefinition;
//# sourceMappingURL=form-create-result.js.map