import { z } from "zod/v4";
declare const ContactFormSchemaDefinition: z.ZodObject<{
    contactId: z.ZodString;
    createdAt: z.ZodISODateTime;
    detail: z.ZodString;
    id: z.ZodNumber;
    source: z.ZodEnum<{
        contact: "contact";
        demo: "demo";
        requestCoverage: "requestCoverage";
        "sentry-feedback": "sentry-feedback";
        waitlist: "waitlist";
    }>;
    subject: z.ZodString;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type ContactFormDefinition = z.infer<typeof ContactFormSchemaDefinition>;
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
export declare const ContactFormSchema: z.ZodType<ContactFormDefinition>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
export {};
//# sourceMappingURL=form.d.ts.map