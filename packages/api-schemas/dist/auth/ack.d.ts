import { z } from "zod/v4";
declare const AuthAckSchemaDefinition: z.ZodObject<{
    message: z.ZodString;
}, z.core.$strip>;
type AuthAckDefinition = z.infer<typeof AuthAckSchemaDefinition>;
/**
 * @openapiSchema AuthAck
 * @endpoint POST /v1/auth/api/register
 * @endpoint POST /v1/auth/api/reset-password
 * @contractShape auth.ack
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/auth/controller/AuthAccountController.kt
 */
export declare const AuthAckSchema: z.ZodType<AuthAckDefinition>;
export type AuthAck = z.infer<typeof AuthAckSchema>;
export {};
//# sourceMappingURL=ack.d.ts.map