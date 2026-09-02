// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * RSA-wrapped AES-256-GCM delivery of one personal API-key secret
 *
 * @openapiSchema CliAuthorizationDelivery
 * @endpoint POST /v1/auth/cli-authorizations/{cliAuthorizationId}/poll
 * @usedBySchema CliAuthorizationPollSchema
 * @contractShape cli.authorization-delivery
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export const CliAuthorizationDeliverySchema = z.object({
    /** Hybrid encryption suite used for this delivery */
    algorithm: z.enum(["RSA_OAEP_256_A256_GCM_V1"]),
    /** Base64-encoded 16-byte AES-GCM authentication tag */
    authenticationTag: z.string(),
    /** Base64-encoded encrypted UTF-8 personal API-key secret bytes */
    ciphertext: z.string(),
    /** Base64-encoded 12-byte AES-GCM nonce */
    nonce: z.string(),
    /** Base64-encoded RSA-OAEP-wrapped AES key */
    wrappedKey: z.string(),
});
//# sourceMappingURL=authorization-delivery.js.map