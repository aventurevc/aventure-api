// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthTokenSchemaDefinition = z.object({
    accessToken: z.string(),
    refreshToken: z.string().nullish(),
});
/**
 * Auth token
 *
 * @openapiSchema AuthToken
 * @endpoint POST /v1/auth/api/refresh
 * @contractShape auth.token
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/auth/AuthToken.kt
 */
export const AuthTokenSchema = AuthTokenSchemaDefinition;
//# sourceMappingURL=token.js.map