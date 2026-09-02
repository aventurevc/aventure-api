import { z } from "zod/v4";
declare const ContactFormMutationSchemaDefinition: z.ZodObject<{
    contactId: z.ZodString;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        contact: "contact";
        demo: "demo";
        requestCoverage: "requestCoverage";
        "sentry-feedback": "sentry-feedback";
        waitlist: "waitlist";
    }>>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ContactFormMutationDefinition = z.infer<typeof ContactFormMutationSchemaDefinition>;
/**
 * Contact form mutation
 *
 * @openapiSchema ContactFormMutation
 * @endpoint POST /v1/contact-forms
 * @contractShape contact.form-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormMutation.kt
 */
export declare const ContactFormMutationSchema: z.ZodType<ContactFormMutationDefinition>;
export type ContactFormMutation = z.infer<typeof ContactFormMutationSchema>;
export {};
//# sourceMappingURL=form-mutation.d.ts.map