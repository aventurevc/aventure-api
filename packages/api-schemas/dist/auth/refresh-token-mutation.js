// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthRefreshTokenMutationSchemaDefinition = z.object({
    refreshToken: z.string().min(1),
});
/**
 * Auth refresh token mutation
 *
 * @openapiSchema AuthRefreshTokenMutation
 * @endpoint POST /v1/auth/api/refresh
 * @contractShape auth.refresh-token-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthRefreshTokenMutation.kt
 */
export const AuthRefreshTokenMutationSchema = AuthRefreshTokenMutationSchemaDefinition;
//# sourceMappingURL=refresh-token-mutation.js.map