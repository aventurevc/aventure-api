// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContactMutationSchemaDefinition = z.object({
    /** Contact email address */
    email: z.email().nullish(),
    /** Email confirmation timestamp */
    emailConfirmed: z.iso.datetime({ offset: true }).nullish(),
    /** Contact first name */
    nameFirst: z.string().nullish(),
    /** Contact full name */
    nameFull: z.string().nullish(),
    /** Contact last name */
    nameLast: z.string().nullish(),
    /** Contact nickname */
    nameNickname: z.string().nullish(),
    /** Contact role */
    role: z.string().nullish(),
    /** Contact LinkedIn profile URL */
    socialLinkedinUrl: z.string().nullish(),
    /** Contact X or Twitter profile URL */
    socialXTwitterUrl: z.string().nullish(),
    /** Contact account status */
    status: z.string().nullish(),
    /** Supabase user identifier */
    supabaseId: z.string().nullish(),
    /** Contact photo upload path */
    userPhotoUploadPath: z.string().nullish(),
    /** Contact time zone */
    userTimezone: z.string().nullish(),
    /** User type labels assigned to the contact */
    userType: z.array(z.string()).nullish(),
});
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
export const ContactMutationSchema = ContactMutationSchemaDefinition;
//# sourceMappingURL=mutation.js.map