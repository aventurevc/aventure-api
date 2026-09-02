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
export declare const ContactFormSourceSchema: z.ZodEnum<{
    contact: "contact";
    demo: "demo";
    requestCoverage: "requestCoverage";
    "sentry-feedback": "sentry-feedback";
    waitlist: "waitlist";
}>;
export type ContactFormSource = z.infer<typeof ContactFormSourceSchema>;
//# sourceMappingURL=form-source.d.ts.map