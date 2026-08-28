// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const CliAuthorizationMutationSchemaDefinition = z.object({
    /** Label for this CLI installation */
    clientLabel: z
        .string()
        .regex(/.*\S.*/)
        .min(1)
        .max(120)
        .nullish(),
    /** Coarse operating-system family */
    clientPlatform: z.enum(["MACOS", "LINUX", "WINDOWS", "OTHER"]).nullish(),
    /** Requested hybrid encryption suite */
    encryptionAlgorithm: z.enum(["RSA_OAEP_256_A256_GCM_V1"]).nullish(),
    /** Base64-encoded DER SubjectPublicKeyInfo for an ephemeral RSA public key */
    encryptionPublicKey: z.string().min(344).max(12000).nullish(),
});
/**
 * Creates a short-lived CLI authorization request bound to an ephemeral key
 *
 * @openapiSchema CliAuthorizationMutation
 * @endpoint POST /v1/auth/cli-authorizations
 * @contractShape cli.authorization-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/cliauthorization/CliAuthorization.kt
 */
export const CliAuthorizationMutationSchema = CliAuthorizationMutationSchemaDefinition;
//# sourceMappingURL=authorization-mutation.js.map