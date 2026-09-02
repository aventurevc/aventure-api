import { z } from "zod/v4";
declare const ContactFormAdminEmailSchemaDefinition: z.ZodObject<{
    error: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    messageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodString;
    statusCode: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type ContactFormAdminEmailDefinition = z.infer<typeof ContactFormAdminEmailSchemaDefinition>;
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
export declare const ContactFormAdminEmailSchema: z.ZodType<ContactFormAdminEmailDefinition>;
export type ContactFormAdminEmail = z.infer<typeof ContactFormAdminEmailSchema>;
export {};
//# sourceMappingURL=form-admin-email.d.ts.map