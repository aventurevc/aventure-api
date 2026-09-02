// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical source for contact-form submissions
 *
 * @openapiSchema ContactFormSource
 * @endpoint POST /v1/contact-forms
 * @usedBySchema ContactFormMutationSchema
 * @usedBySchema ContactFormSchema
 * @contractShape contact.form-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormSourceType.kt
 */
export const ContactFormSourceSchema = z.enum([
    "contact",
    "demo",
    "requestCoverage",
    "sentry-feedback",
    "waitlist",
]);
//# sourceMappingURL=form-source.js.map