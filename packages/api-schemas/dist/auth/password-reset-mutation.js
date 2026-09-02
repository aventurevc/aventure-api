// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthPasswordResetMutationSchemaDefinition = z.object({
    email: z.email(),
    redirectTo: z.string().nullish(),
});
/**
 * Auth password reset mutation
 *
 * @openapiSchema AuthPasswordResetMutation
 * @endpoint POST /v1/auth/api/reset-password
 * @contractShape auth.password-reset-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthPasswordResetMutation.kt
 */
export const AuthPasswordResetMutationSchema = AuthPasswordResetMutationSchemaDefinition;
//# sourceMappingURL=password-reset-mutation.js.map