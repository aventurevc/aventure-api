// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContactFormSourceSchema } from "./form-source.js";
const ContactFormMutationSchemaDefinition = z.object({
    /** Contact record identifier for the submitted form */
    contactId: z.string(),
    /** Optional message body supplied by the submitter */
    detail: z.string().nullish(),
    /** Source */
    source: ContactFormSourceSchema.nullish(),
    /** Optional subject line supplied by the submitter */
    subject: z.string().max(255).nullish(),
});
/**
 * Contact form mutation
 *
 * @openapiSchema ContactFormMutation
 * @endpoint POST /v1/contact-forms
 * @contractShape contact.form-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormMutation.kt
 */
export const ContactFormMutationSchema = ContactFormMutationSchemaDefinition;
//# sourceMappingURL=form-mutation.js.map