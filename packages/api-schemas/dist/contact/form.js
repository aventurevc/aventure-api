// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContactFormSourceSchema } from "./form-source.js";
const ContactFormSchemaDefinition = z.object({
    contactId: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    detail: z.string(),
    id: z.number().int(),
    /** Source */
    source: ContactFormSourceSchema,
    subject: z.string(),
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * Contact form
 *
 * @openapiSchema ContactForm
 * @endpoint POST /v1/contact-forms
 * @usedBySchema ContactFormCreateResultSchema
 * @contractShape contact.form
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactForm.kt
 */
export const ContactFormSchema = ContactFormSchemaDefinition;
//# sourceMappingURL=form.js.map