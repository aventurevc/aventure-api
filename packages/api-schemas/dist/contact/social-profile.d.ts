import { z } from "zod/v4";
declare const ContactSocialProfileSchemaDefinition: z.ZodObject<{
    socialLinkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    socialXTwitterUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ContactSocialProfileDefinition = z.infer<typeof ContactSocialProfileSchemaDefinition>;
/**
 * Authenticated user's social profile URLs
 *
 * @openapiSchema ContactSocialProfile
 * @endpoint PATCH /v1/auth/api/me
 * @contractShape contact.social-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactSocialProfile.kt
 */
export declare const ContactSocialProfileSchema: z.ZodType<ContactSocialProfileDefinition>;
export type ContactSocialProfile = z.infer<typeof ContactSocialProfileSchema>;
export {};
//# sourceMappingURL=social-profile.d.ts.map