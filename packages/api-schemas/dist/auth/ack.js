// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthAckSchemaDefinition = z.object({
    message: z.string(),
});
/**
 * @openapiSchema AuthAck
 * @endpoint POST /v1/auth/api/register
 * @endpoint POST /v1/auth/api/reset-password
 * @contractShape auth.ack
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/adapters/inbound/web/auth/controller/AuthAccountController.kt
 */
export const AuthAckSchema = AuthAckSchemaDefinition;
//# sourceMappingURL=ack.js.map