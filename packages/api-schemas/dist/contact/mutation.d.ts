import { z } from "zod/v4";
declare const ContactMutationSchemaDefinition: z.ZodObject<{
    email: z.ZodOptional<z.ZodNullable<z.ZodEmail>>;
    emailConfirmed: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameFull: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameNickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialLinkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialXTwitterUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    supabaseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userPhotoUploadPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userTimezone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userType: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
type ContactMutationDefinition = z.infer<typeof ContactMutationSchemaDefinition>;
/**
 * Contact mutation
 *
 * @openapiSchema ContactMutation
 * @endpoint POST /v1/contacts
 * @endpoint PATCH /v1/contacts/{id}
 * @contractShape contact.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactMutation.kt
 */
export declare const ContactMutationSchema: z.ZodType<ContactMutationDefinition>;
export type ContactMutation = z.infer<typeof ContactMutationSchema>;
export {};
//# sourceMappingURL=mutation.d.ts.map