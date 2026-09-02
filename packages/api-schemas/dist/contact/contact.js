// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContactSchemaDefinition = z.object({
    clerkUserId: z.string().nullish(),
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    email: z.string().nullish(),
    emailConfirmed: z.iso.datetime({ offset: true }).nullish(),
    id: z.string(),
    nameFirst: z.string().nullish(),
    nameFull: z.string().nullish(),
    nameLast: z.string().nullish(),
    nameNickname: z.string().nullish(),
    role: z.string().nullish(),
    socialLinkedinUrl: z.string().nullish(),
    socialXTwitterUrl: z.string().nullish(),
    status: z.string().nullish(),
    supabaseId: z.string().nullish(),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    userPhotoUploadPath: z.string().nullish(),
    userTimezone: z.string().nullish(),
    /** User type labels assigned to the contact */
    userType: z.array(z.string()),
});
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
export const ContactSchema = ContactSchemaDefinition;
//# sourceMappingURL=contact.js.map