// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthLoginMutationSchemaDefinition = z.object({
    email: z.email(),
    password: z.string().min(1),
});
/**
 * Auth login mutation
 *
 * @openapiSchema AuthLoginMutation
 * @endpoint POST /v1/auth/api/login
 * @contractShape auth.login-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthLoginMutation.kt
 */
export const AuthLoginMutationSchema = AuthLoginMutationSchemaDefinition;
//# sourceMappingURL=login-mutation.js.map