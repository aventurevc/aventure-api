import { z } from "zod/v4";
declare const ContactSchemaDefinition: z.ZodObject<{
    clerkUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    emailConfirmed: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodString;
    nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameFull: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameNickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialLinkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialXTwitterUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supabaseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    userPhotoUploadPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userTimezone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userType: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type ContactDefinition = z.infer<typeof ContactSchemaDefinition>;
/**
 * Canonical read projection of an app user contact record
 *
 * @openapiSchema Contact
 * @endpoint GET /v1/auth/api/me
 * @endpoint POST /v1/contacts
 * @endpoint PATCH /v1/auth/api/me
 * @endpoint PATCH /v1/contacts/{id}
 * @endpoint DELETE /v1/contacts/{id}
 * @contractShape contact.contact
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/Contact.kt
 */
export declare const ContactSchema: z.ZodType<ContactDefinition>;
export type Contact = z.infer<typeof ContactSchema>;
export {};
//# sourceMappingURL=contact.d.ts.map