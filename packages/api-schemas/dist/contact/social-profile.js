// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContactSocialProfileSchemaDefinition = z.object({
    /** LinkedIn member profile URL */
    socialLinkedinUrl: z.string().nullish(),
    /** X or Twitter profile URL */
    socialXTwitterUrl: z.string().nullish(),
});
/**
 * Authenticated user's social profile URLs
 *
 * @openapiSchema ContactSocialProfile
 * @endpoint PATCH /v1/auth/api/me
 * @contractShape contact.social-profile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/ContactSocialProfile.kt
 */
export const ContactSocialProfileSchema = ContactSocialProfileSchemaDefinition;
//# sourceMappingURL=social-profile.js.map