import { z } from "zod/v4";
declare const ContactFormCreateResultSchemaDefinition: z.ZodObject<{
    adminEmail: z.ZodType<{
        error?: string | null | undefined;
        messageId?: string | null | undefined;
        reason?: string | null | undefined;
        requestId?: string | null | undefined;
        status: string;
        statusCode?: number | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        error?: string | null | undefined;
        messageId?: string | null | undefined;
        reason?: string | null | undefined;
        requestId?: string | null | undefined;
        status: string;
        statusCode?: number | null | undefined;
    }, unknown>>;
    contactForm: z.ZodType<{
        contactId: string;
        createdAt: string;
        detail: string;
        id: number;
        source: "contact" | "demo" | "requestCoverage" | "sentry-feedback" | "waitlist";
        subject: string;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        contactId: string;
        createdAt: string;
        detail: string;
        id: number;
        source: "contact" | "demo" | "requestCoverage" | "sentry-feedback" | "waitlist";
        subject: string;
        updatedAt: string;
    }, unknown>>;
}, z.core.$strip>;
type ContactFormCreateResultDefinition = z.infer<typeof ContactFormCreateResultSchemaDefinition>;
/**
 * Contact form create result
 *
 * @openapiSchema ContactFormCreateResult
 * @endpoint POST /v1/contact-forms
 * @contractShape contact.form-create-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactFormCreateResult.kt
 */
export declare const ContactFormCreateResultSchema: z.ZodType<ContactFormCreateResultDefinition>;
export type ContactFormCreateResult = z.infer<typeof ContactFormCreateResultSchema>;
export {};
//# sourceMappingURL=form-create-result.d.ts.map