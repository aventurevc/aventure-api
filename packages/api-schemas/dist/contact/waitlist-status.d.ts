import { z } from "zod/v4";
declare const ContactWaitlistStatusSchemaDefinition: z.ZodObject<{
    contactId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exists: z.ZodBoolean;
    onWaitlist: z.ZodBoolean;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type ContactWaitlistStatusDefinition = z.infer<typeof ContactWaitlistStatusSchemaDefinition>;
/**
 * Waitlist status
 *
 * @openapiSchema ContactWaitlistStatus
 * @endpoint GET /v1/contacts/waitlist-status
 * @contractShape contact.waitlist-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/contact/WaitlistStatus.kt
 */
export declare const ContactWaitlistStatusSchema: z.ZodType<ContactWaitlistStatusDefinition>;
export type ContactWaitlistStatus = z.infer<typeof ContactWaitlistStatusSchema>;
export {};
//# sourceMappingURL=waitlist-status.d.ts.map