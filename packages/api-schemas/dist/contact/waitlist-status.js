// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ContactWaitlistStatusSchemaDefinition = z.object({
    contactId: z.string().nullish(),
    exists: z.boolean(),
    onWaitlist: z.boolean(),
    status: z.string().nullish(),
});
/**
 * Waitlist status
 *
 * @openapiSchema ContactWaitlistStatus
 * @endpoint GET /v1/contacts/waitlist-status
 * @contractShape contact.waitlist-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/WaitlistStatus.kt
 */
export const ContactWaitlistStatusSchema = ContactWaitlistStatusSchemaDefinition;
//# sourceMappingURL=waitlist-status.js.map